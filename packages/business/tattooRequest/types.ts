//local
import type { TattooRequest as TattooRequest_src } from "@hyperinkstudio/services";

import { Data } from "../types";

export type TattooRequest = TattooRequest_src;

export type TattooRequestFormKey = keyof TattooRequest_src;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  createdAt?: string | null;
};
