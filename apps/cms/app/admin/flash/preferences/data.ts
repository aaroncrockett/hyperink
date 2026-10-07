import type { UIRowMeta } from "@hyperink/api";
import type { FlashOpts } from "@hyperink/api/options";
import { z } from "zod";

export type FlashOptsUI = Pick<FlashOpts, "default_collection">;

export const FLASH_OPTS_METADATA: UIRowMeta<FlashOptsUI> = {
  default_collection: {
    id: "default_collection",
    label: "Default Collection",
  },
};

export const EDIT_FLASH_SCHEMA = z.object({
  default_collection: z.string().min(1, "Collection is required"),
});

export const FLASH_METADATA_LIST = Object.values(FLASH_OPTS_METADATA);

export const FLASH_METADATA_KEYS = Object.keys(FLASH_OPTS_METADATA);

export type FlashMetadata = typeof FLASH_OPTS_METADATA;
