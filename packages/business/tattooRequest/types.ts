import { z } from "zod";
//local
import type { TattooRequest as TattooRequest_src } from "@hyperinkstudio/services";

import { Data } from "../types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequest = TattooRequest_src;

export type TattReqFormDisplay = Pick<
  TattooRequest_src,
  | "preferred_name"
  | "email"
  | "phone"
  | "gender"
  | "bluesky_id"
  | "instagram_id"
  | "notes"
>;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  createdAt?: string | null;
};
