export const PLACEMENT_DEFAULT_VALUES = [
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

export const SIZE_DEFAULT_VALUES = [
  "0-2in",
  "2-4in",
  "4-7in",
  "7-9in",
  "9-12in",
  "13+in",
] as const;

export const STYLE_DEFAULT_VALUES = [
  "traditional",
  "neo-traditional",
  "illustrative",
  "realism",
] as const;
