import { z } from "zod";
import type { UIRowMeta } from "@hyperink/api";
import type { OptsUIData, TagOptsUIData } from "../../data";

type IntroCollectionOpts = Pick<OptsUIData, "profile_id">;
type IntroCollectionTags = Pick<TagOptsUIData, "collections">;
type IntroCollections = IntroCollectionOpts & IntroCollectionTags;

export const INTRO_COLLECTION: UIRowMeta<IntroCollections> = {
  profile_id: {
    id: "profile_id",
    label: "label",
  },
  collections: {
    id: "collections",
    label: "Collections",
  },
};

type KeyOfIntroCollection = keyof typeof INTRO_COLLECTION;

type IntroCollectionSchema = {
  [K in KeyOfIntroCollection]: z.ZodType;
};

export const INTRO_COLLECTION_SCHEMA = z.object({
  profile_id: z.string(),
  collections: z.string().transform((value) => [value]),
}) satisfies z.ZodObject<IntroCollectionSchema>;

export type IntroCollectionSchemaTypes = z.infer<
  typeof INTRO_COLLECTION_SCHEMA
>;
