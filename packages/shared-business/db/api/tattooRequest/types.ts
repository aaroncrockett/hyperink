import { z } from "zod";
//local
import type { TattooRequest } from "@hyperinkstudio/db/supabase/types";

import { Data } from "@hyperinkstudio/shared-business/types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequestData<T> = Data<TattooRequestFormKey> & {
  options?: T[];
  createdAt?: string | null;
};
