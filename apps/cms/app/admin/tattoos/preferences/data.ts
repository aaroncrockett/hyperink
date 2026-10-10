import type { UIRowMeta } from "@hyperink/api";
import type { TattooOpts } from "@hyperink/api/options";
import { z } from "zod";

export type TattooOptsUI = Pick<TattooOpts, "default_collection">;

export const TATTOO_OPTS_METADATA: UIRowMeta<TattooOptsUI> = {
  default_collection: {
    id: "default_collection",
    label: "Default Collection",
  },
};

export const EDIT_TATTOO_SCHEMA = z.object({
  default_collection: z.string().min(1, "Collection is required"),
});

export const TATTOO_METADATA_LIST = Object.values(TATTOO_OPTS_METADATA);

export const TATTOO_METADATA_KEYS = Object.keys(TATTOO_OPTS_METADATA);

export type TattooMetadata = typeof TATTOO_OPTS_METADATA;
