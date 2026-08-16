import type { ProfileTaggingOptions as ProfileTaggingOptionsDb } from "@hyperinkstudio/backend-services";

import { Data } from "@hyperinkstudio/business/types";

// example on what we do when we need to replace a key
// export type ProfileTaggingOptions = Omit<
//   ProfileTaggingOptionsDb,
//   "collections"
// > & {
//   dictionary: ProfileTaggingOptionsDb["collections"];
// };

export type ProfileTaggingOptions = ProfileTaggingOptionsDb;

export type ProfileTaggingOptionsKeys = keyof ProfileTaggingOptions;

export type ProfileTaggingOptionsBase = Data<ProfileTaggingOptionsKeys> & {
  defaultValues?: string[];
};
