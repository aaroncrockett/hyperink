import { Data, SelectOption } from "@hyperinkstudio/shared-business/types";

const PLACEMENT_DEFAULT_KEYS = [
  "thigh",
  "upper-arm",
  "lower-arm",
  "other",
  "neck",
  "abdomen",
  "buttock",
  "lower leg",
  "ankle",
  "hand",
  "chest",
  "upper-back",
  "lower-back",
] as const;

const TYPES_KEYS = ["flash", "custom"] as const;

const SIZE_DEFAULT_KEYS = [
  "0-2in",
  "2-4in",
  "4-7in",
  "7-9in",
  "9-12in",
  "13+in",
] as const;

const STYLE_DEFAULT_KEYS = [
  "traditional",
  "neo-traditional",
  "illustrative",
  "realism",
] as const;

const toSelectOptions = <T extends string>(
  keys: readonly T[],
): SelectOption[] =>
  keys.map((key) => ({
    value: key,
    label: key
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }));

export const PLACEMENT_DEFAULT_OPTIONS = toSelectOptions(
  PLACEMENT_DEFAULT_KEYS,
);
export const TYPES_DEFAULT_OPTIONS = toSelectOptions(TYPES_KEYS);
export const SIZE_DEFAULT_OPTIONS = toSelectOptions(SIZE_DEFAULT_KEYS);
export const STYLE_DEFAULT_OPTIONS = toSelectOptions(STYLE_DEFAULT_KEYS);
