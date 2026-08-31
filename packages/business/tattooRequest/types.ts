import { z } from "zod";
//local
import type { TattooRequest as TattooRequest_src } from "@hyperinkstudio/services";

import { Data } from "../types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequest = TattooRequest_src;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  createdAt?: string | null;
};
