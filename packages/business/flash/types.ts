import type { FlashRecord as FlashRecordDb } from "@hyperinkstudio/backend-services";

import { Data } from "@hyperinkstudio/business/types";

// example on what we do when we need to replace a key
// export type ProfileTaggingOptions = Omit<
//   ProfileTaggingOptionsDb,
//   "collections"
// > & {
//   dictionary: ProfileTaggingOptionsDb["collections"];
// };

export type FlashRecord = FlashRecordDb;

export type FlashRecordsKeys = keyof FlashRecord;

// export type FlashBase = Data<ProfileTaggingOptionsKeys> & {
//   defaultValues?: string[];
// };

export type FlashBase = Data<FlashRecordsKeys>;
