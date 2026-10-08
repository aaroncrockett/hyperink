import type { UIRowMeta } from "@hyperink/api";
import type { TattooUIRow } from "@hyperink/api/tattoo";

import { FileUpload } from "@skeletonlabs/skeleton-react";

export type FileUploadType = typeof FileUpload;

export type FileUploadContext = Parameters<
  NonNullable<React.ComponentProps<typeof FileUpload.Context>["children"]>
>[0];

export type TattooUI = Pick<
  TattooUIRow,
  | "id"
  | "collection"
  | "is_portfolio_img"
  | "flash_id"
  | "pinned_order"
  | "set_id"
  | "set_order"
  | "client_tattoo_id"
  | "title"
  | "description"
  | "profile_tattoo_id"
  | "path"
  | "name"
>;

export type TattooUIPublic = TattooUI & {
  public_url: string;
};

export const TATTOO_METADATA: UIRowMeta<TattooUI> = {
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
  is_portfolio_img: {
    id: "is_portfolio_img",
    label: "Is Portfolio Image",
    readOnly: false,
    display: false,
  },
  flash_id: {
    id: "flash_id",
    label: "Flash Id",
    readOnly: false,
    display: false,
  },
  pinned_order: {
    id: "pinned_order",
    label: "Pinned Order",
    readOnly: false,
    display: false,
  },
  set_id: {
    id: "set_id",
    label: "Set Id",
    readOnly: false,
    display: false,
  },
  set_order: {
    id: "set_order",
    label: "Set Order",
    readOnly: true,
    display: true,
  },
  client_tattoo_id: {
    id: "client_tattoo_id",
    label: "Client Tattoo Id",
    readOnly: false,
    display: false,
  },
  title: {
    id: "title",
    label: "Title",
    readOnly: false,
    display: true,
  },
  description: {
    id: "description",
    label: "Description",
    readOnly: false,
    display: true,
  },
  profile_tattoo_id: {
    id: "profile_tattoo_id",
    label: "Profile Tattoo Id",
    readOnly: false,
    display: false,
  },
  path: {
    id: "path",
    label: "Path",
    readOnly: true,
    display: false,
  },
  name: {
    id: "name",
    label: "File Name",
    readOnly: true,
    display: false,
  },
};

export const TATTOO_METADATA_LIST = Object.values(TATTOO_METADATA);

export const TATTOO_METADATA_KEYS = Object.keys(TATTOO_METADATA);

export type TattooMetadata = typeof TATTOO_METADATA;
