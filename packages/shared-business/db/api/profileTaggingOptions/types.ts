import { z } from "zod";
//local
import type { ProfileTaggingOptions } from "@hyperinkstudio/db/supabase/types";

import { Data } from "@hyperinkstudio/shared-business/types";

export type ProfileTaggingOptionsKey = keyof ProfileTaggingOptions;

export type ProfileTaggingOptionsData = Data<ProfileTaggingOptionsKey> & {
  defaultValues?: string[];
};
