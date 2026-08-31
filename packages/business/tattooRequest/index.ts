import * as Types from "./types";
import * as Base from "./base";

import { createTattooRequest as createTattooRequest_src } from "@hyperinkstudio/api";

export const createTattooRequest = createTattooRequest_src;

export * from "./types";

export const DISPLAY_KEYS = Object.values(Base)
  .filter((field) => "display" in field && field.display === true)
  .map((field) => field.id);

type DisplayTattReqKeys = (typeof DISPLAY_KEYS)[number];

export type DisplayTattRequest = Pick<Types.TattooRequest, DisplayTattReqKeys>;
