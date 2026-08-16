import { z } from "zod";
//local
import type { TattooRequest } from "@hyperinkstudio/backend-services";

import { Data } from "@hyperinkstudio/business/types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  options?: T[];
  createdAt?: string | null;
};
