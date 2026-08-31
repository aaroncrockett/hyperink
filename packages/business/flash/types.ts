import type { FlashRecord as FlashRecordDb } from "@hyperinkstudio/services";

import { Data } from "../types";

export type FlashRecord = FlashRecordDb;

export type FlashRecordsKeys = keyof FlashRecord;

// export type FlashBase = Data<ProfileTaggingOptionsKeys> & {
//   defaultValues?: string[];
// };

export type FlashBase = Data<FlashRecordsKeys>;
