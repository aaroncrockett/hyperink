import type { TattooImage } from "@hyperinkstudio/backend-services";
export const TABLE_TATTOO_IMAGE = "tattoo_image";
export const BUCKET_TATTOO = "user-images";

export const TATTOO_IMAGE_COLS = [
  "id",
  "client_tattoo_id",
  "created_at",
  "path",
  "name",
  "collections",
  "flash_id",
  "is_portfolio_img",
  "meta_data",
  "pinned_order",
  "readable_name",
  "set_id",
  "set_order",
  "styles",
  "tags",
] as const satisfies (keyof TattooImage)[];
