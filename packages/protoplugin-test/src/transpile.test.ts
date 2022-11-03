// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CodeGeneratorRequest, FileDescriptorProto } from "@bufbuild/protobuf";
import { createEcmaScriptPlugin } from "@bufbuild/protoplugin";
import type { Schema } from "@bufbuild/protoplugin/ecmascript";

/**
 * Creates a plugin with the given function to generate TypeScript,
 * runs the plugin, and returns a function to retrieve output files.
 */
function transpile(
  genTs: (schema: Schema) => void
): (name: string) => string[] {
  const req = new CodeGeneratorRequest({
    parameter: `target=ts+js+dts`,
  });
  const plugin = createEcmaScriptPlugin({
    name: "test-plugin",
    version: "v99.0.0",
    generateTs: genTs,
  });
  const res = plugin.run(req);
  return function linesOf(filename: string): string[] {
    const file = res.file.find((f) => f.name === filename);
    if (!file) {
      throw new Error(`did not find file ${filename}`);
    }
    const content = file.content ?? "";
    return content.trim().split("\n");
  };
}

describe("transpile", function () {
  test("ECMAScript types", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      f.print("export const p = Promise.resolve(true);");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      "export const p = Promise.resolve(true);",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      "export declare const p: Promise<boolean>;",
    ]);
  });

  test("TypeScript built-in types", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      f.print("export const n: ReturnType<typeof parseInt> = 1;");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      "export const n: ReturnType<typeof parseInt> = 1;",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      "export declare const n: ReturnType<typeof parseInt>;",
    ]);
  });

  test("DOM types", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      f.print("export const h = new Headers();");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      "export const h = new Headers();",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      "export declare const h: Headers;",
    ]);
  });

  test("runtime types", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      f.print("export const j: ", schema.runtime.JsonValue, " = 1;");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      'import type {JsonValue} from "@bufbuild/protobuf";',
      "",
      "export const j: JsonValue = 1;",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      'import type { JsonValue } from "@bufbuild/protobuf";',
      "export declare const j: JsonValue;",
    ]);
  });

  test("file preamble", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      f.preamble({
        kind: "file",
        name: "test",
        syntax: "proto3",
        messages: [],
        deprecated: false,
        enums: [],
        extensions: [],
        services: [],
        proto: new FileDescriptorProto(),
        toString() {
          return "fake DescFile";
        },
        getPackageComments() {
          return {
            leadingDetached: [],
            sourcePath: [],
            leading: undefined,
            trailing: undefined,
          };
        },
        getSyntaxComments() {
          return {
            leadingDetached: [],
            sourcePath: [],
            leading: undefined,
            trailing: undefined,
          };
        },
      });
      f.print("export const t = 1;");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      '// @generated by test-plugin v99.0.0 with parameter "target=ts+js+dts"',
      "// @generated from file test.proto (syntax proto3)",
      "/* eslint-disable */",
      "// @ts-nocheck",
      "",
      "export const t = 1;",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      '// @generated by test-plugin v99.0.0 with parameter "target=ts+js+dts"',
      "// @generated from file test.proto (syntax proto3)",
      "/* eslint-disable */",
      "// @ts-nocheck",
      "",
      "export declare const t = 1;",
    ]);
  });

  test("unknown type is not inferred correctly", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      const Foo = f.import("Foo", "foo");
      f.print("export function foo() { return new ", Foo, "(); };");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      'import {Foo} from "foo";',
      "",
      "export function foo() { return new Foo(); };",
    ]);
    // The return type is inferred as `any` instead of the expected
    // `Foo`. This is a limitation of the TypeScript compiler.
    expect(linesOf("test.d.ts")).toStrictEqual([
      "export declare function foo(): any;",
    ]);
  });

  test("unknown type can be typed explicitly", () => {
    const linesOf = transpile((schema) => {
      const f = schema.generateFile("test.ts");
      const Foo = f.import("Foo", "foo");
      f.print("export function foo(): ", Foo, " { return new ", Foo, "(); };");
    });
    expect(linesOf("test.ts")).toStrictEqual([
      'import {Foo} from "foo";',
      "",
      "export function foo(): Foo { return new Foo(); };",
    ]);
    expect(linesOf("test.d.ts")).toStrictEqual([
      'import { Foo } from "foo";',
      "export declare function foo(): Foo;",
    ]);
  });
});