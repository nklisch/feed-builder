/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from "express";
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import { lexicons } from "../../../../lexicons";
import { isObj, hasProp } from "../../../../util";
import { CID } from "multiformats/cid";
import { HandlerAuth, HandlerPipeThrough } from "@atproto/xrpc-server";

export interface QueryParams {}

export interface InputSchema {
  /** A token received through com.atproto.identity.requestPlcOperationSignature */
  token?: string;
  rotationKeys?: string[];
  alsoKnownAs?: string[];
  verificationMethods?: {};
  services?: {};
  [k: string]: unknown;
}

export interface OutputSchema {
  /** A signed DID PLC operation. */
  operation: {};
  [k: string]: unknown;
}

export interface HandlerInput {
  encoding: "application/json";
  body: InputSchema;
}

export interface HandlerSuccess {
  encoding: "application/json";
  body: OutputSchema;
  headers?: { [key: string]: string };
}

export interface HandlerError {
  status: number;
  message?: string;
}

export type HandlerOutput = HandlerError | HandlerSuccess | HandlerPipeThrough;
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
  auth: HA;
  params: QueryParams;
  input: HandlerInput;
  req: express.Request;
  res: express.Response;
};
export type Handler<HA extends HandlerAuth = never> = (ctx: HandlerReqCtx<HA>) => Promise<HandlerOutput> | HandlerOutput;
