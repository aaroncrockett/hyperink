import type { FlashOptions as FlashOptionsDb } from "@hyperinkstudio/backend-services";

import { Data } from "@hyperinkstudio/business";

export type FlashOptions = FlashOptionsDb;

export type FlashOptionsKeys = keyof FlashOptions;

// export type FlashBase = Data<ProfileTaggingOptionsKeys> & {
//   defaultValues?: string[];
// };

export type FlashOptionsBase = Data<FlashOptionsKeys>;
