import type { FlashOptions as FlashOptionsDb } from "@hyperinkstudio/services";

import { Data } from "@hyperinkstudio/business";

export type FlashOptions = FlashOptionsDb;

export type FlashOptionsKeys = keyof FlashOptions;

export type FlashOptionsBase = Data<FlashOptionsKeys>;
