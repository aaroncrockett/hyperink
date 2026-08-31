import { z } from "zod";
//local
import type { TattooRequest } from "@hyperinkstudio/services";

import { Data } from "../types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  options?: T[];
  createdAt?: string | null;
};
