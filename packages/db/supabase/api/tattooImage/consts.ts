import type { TattooImage } from "@hyperinkstudio/db";
export const TABLE_TATTOO_IMAGE = "tattoo_image";
export const BUCKET = "user-images";

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

export const TATTOO_IMAGE_COLS_KEY_VAL = TATTOO_IMAGE_COLS.reduce(
  (acc, key) => {
    acc[key] = {
      key,
      name: key
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    };

    return acc;
  },
  {} as Record<
    keyof TattooImage,
    {
      key: keyof TattooImage;
      name: string;
    }
  >,
);

export const TATTOO_IMAGE_COLS_KEY_VAL_LIST = Object.values(
  TATTOO_IMAGE_COLS_KEY_VAL,
);
