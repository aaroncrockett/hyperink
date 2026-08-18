import * as Types from "./types";
export const READABLE_NAME = {
  label: "Readable Name",
  id: "readable_name",
  display: true,
  type: "text",
} as const satisfies Types.FlashBase;

export const TOTAL_AVAILABILITY = {
  label: "Total Available",
  id: "total_availability",
  display: true,
  type: "text",
} as const satisfies Types.FlashBase;

export const FLASH_COLLECTION = {
  label: "Collection",
  id: "collection",
  display: true,
  type: "text",
} as const satisfies Types.FlashBase;

export const FLASH_TAGS = {
  label: "Tags",
  id: "tags",
  display: true,
  type: "selectmulti",
} as const satisfies Types.FlashBase;

export const FLASH_STYLES = {
  label: "Styles",
  id: "styles",
  display: true,
  type: "selectmulti",
} as const satisfies Types.FlashBase;
