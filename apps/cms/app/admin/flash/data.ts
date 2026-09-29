import type { UIRowMeta } from "@hyperink/api";
import type { FlashUIRow } from "@hyperink/api/flash";

import { FileUpload } from "@skeletonlabs/skeleton-react";

export type FileUploadType = typeof FileUpload;

export type FileUploadContext = Parameters<
  NonNullable<React.ComponentProps<typeof FileUpload.Context>["children"]>
>[0];

export type FlashUI = Pick<
  FlashUIRow,
  | "id"
  | "collection"
  | "isPublic"
  | "path"
  | "total_availability"
  | "pinned_order"
  | "sold_at"
  | "readable_name"
  | "name"
  | "user_id"
>;

export type FlashUIPublic = FlashUI & {
  public_url: string;
};

export const FLASH_METADATA: UIRowMeta<FlashUI> = {
  id: {
    id: "id",
    label: "Id",
    readOnly: true,
    display: false,
  },
  collection: {
    id: "collection",
    label: "Collection",
    readOnly: false,
    display: true,
  },
  isPublic: {
    id: "isPublic",
    label: "Is Public",
    readOnly: false,
    display: true,
  },
  path: {
    id: "path",
    label: "Path",
    readOnly: true,
    display: false,
  },
  total_availability: {
    id: "total_availability",
    label: "Total Availability",
    readOnly: false,
    display: true,
  },
  pinned_order: {
    id: "pinned_order",
    label: "Pinned Order",
    readOnly: false,
    display: true,
  },
  sold_at: {
    id: "sold_at",
    label: "Sold At",
    readOnly: false,
    display: true,
  },
  readable_name: {
    id: "readable_name",
    label: "Title",
    readOnly: false,
    display: true,
  },
  name: {
    id: "name",
    label: "File Name",
    readOnly: true,
    display: true,
  },
  user_id: {
    id: "user_id",
    label: "user Id",
    readOnly: true,
    display: false,
  },
};

export const FLASH_METADATA_LIST = Object.values(FLASH_METADATA);

export const FLASH_METADATA_KEYS = Object.keys(FLASH_METADATA);

export type FlashMetadata = typeof FLASH_METADATA;
