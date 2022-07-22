// Copyright 2020-2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v0.0.9 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/audit/v1alpha1/module.proto (package buf.alpha.audit.v1alpha1, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType
 */
export enum BufAlphaRegistryV1Alpha1ResolvedReferenceType {
  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_COMMIT = 1;
   */
  COMMIT = 1,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_BRANCH = 2;
   */
  BRANCH = 2,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TAG = 3;
   */
  TAG = 3,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TRACK = 4;
   */
  TRACK = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1ResolvedReferenceType)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1ResolvedReferenceType, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType", [
  { no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_UNSPECIFIED" },
  { no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_COMMIT" },
  { no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_BRANCH" },
  { no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TAG" },
  { no: 4, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TRACK" },
]);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin
 */
export class BufAlphaRegistryV1Alpha1LocalModulePin extends Message<BufAlphaRegistryV1Alpha1LocalModulePin> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * @generated from field: string branch = 3;
   */
  branch = "";

  /**
   * @generated from field: string commit = 4;
   */
  commit = "";

  /**
   * @generated from field: string digest = 5;
   */
  digest = "";

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<BufAlphaRegistryV1Alpha1LocalModulePin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "branch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BufAlphaRegistryV1Alpha1LocalModulePin {
    return new BufAlphaRegistryV1Alpha1LocalModulePin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModulePin {
    return new BufAlphaRegistryV1Alpha1LocalModulePin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModulePin {
    return new BufAlphaRegistryV1Alpha1LocalModulePin().fromJsonString(jsonString, options);
  }

  static equals(a: BufAlphaRegistryV1Alpha1LocalModulePin | PlainMessage<BufAlphaRegistryV1Alpha1LocalModulePin> | undefined, b: BufAlphaRegistryV1Alpha1LocalModulePin | PlainMessage<BufAlphaRegistryV1Alpha1LocalModulePin> | undefined): boolean {
    return proto3.util.equals(BufAlphaRegistryV1Alpha1LocalModulePin, a, b);
  }
}

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference
 */
export class BufAlphaRegistryV1Alpha1LocalModuleReference extends Message<BufAlphaRegistryV1Alpha1LocalModuleReference> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * @generated from field: string reference = 3;
   */
  reference = "";

  constructor(data?: PartialMessage<BufAlphaRegistryV1Alpha1LocalModuleReference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleReference {
    return new BufAlphaRegistryV1Alpha1LocalModuleReference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleReference {
    return new BufAlphaRegistryV1Alpha1LocalModuleReference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleReference {
    return new BufAlphaRegistryV1Alpha1LocalModuleReference().fromJsonString(jsonString, options);
  }

  static equals(a: BufAlphaRegistryV1Alpha1LocalModuleReference | PlainMessage<BufAlphaRegistryV1Alpha1LocalModuleReference> | undefined, b: BufAlphaRegistryV1Alpha1LocalModuleReference | PlainMessage<BufAlphaRegistryV1Alpha1LocalModuleReference> | undefined): boolean {
    return proto3.util.equals(BufAlphaRegistryV1Alpha1LocalModuleReference, a, b);
  }
}

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult
 */
export class BufAlphaRegistryV1Alpha1LocalModuleResolveResult extends Message<BufAlphaRegistryV1Alpha1LocalModuleResolveResult> {
  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference reference = 1;
   */
  reference?: BufAlphaRegistryV1Alpha1LocalModuleReference;

  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin pin = 2;
   */
  pin?: BufAlphaRegistryV1Alpha1LocalModulePin;

  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType resolved_reference_type = 3;
   */
  resolvedReferenceType = BufAlphaRegistryV1Alpha1ResolvedReferenceType.UNSPECIFIED;

  constructor(data?: PartialMessage<BufAlphaRegistryV1Alpha1LocalModuleResolveResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference", kind: "message", T: BufAlphaRegistryV1Alpha1LocalModuleReference },
    { no: 2, name: "pin", kind: "message", T: BufAlphaRegistryV1Alpha1LocalModulePin },
    { no: 3, name: "resolved_reference_type", kind: "enum", T: proto3.getEnumType(BufAlphaRegistryV1Alpha1ResolvedReferenceType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleResolveResult {
    return new BufAlphaRegistryV1Alpha1LocalModuleResolveResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleResolveResult {
    return new BufAlphaRegistryV1Alpha1LocalModuleResolveResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BufAlphaRegistryV1Alpha1LocalModuleResolveResult {
    return new BufAlphaRegistryV1Alpha1LocalModuleResolveResult().fromJsonString(jsonString, options);
  }

  static equals(a: BufAlphaRegistryV1Alpha1LocalModuleResolveResult | PlainMessage<BufAlphaRegistryV1Alpha1LocalModuleResolveResult> | undefined, b: BufAlphaRegistryV1Alpha1LocalModuleResolveResult | PlainMessage<BufAlphaRegistryV1Alpha1LocalModuleResolveResult> | undefined): boolean {
    return proto3.util.equals(BufAlphaRegistryV1Alpha1LocalModuleResolveResult, a, b);
  }
}
