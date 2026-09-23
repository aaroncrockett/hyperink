import { z } from "zod";

export const INTRO_COLLECTION = {
  profile_id: {
    id: "profile_id",
    label: "label",
  },
  collections: {
    id: "collections",
    label: "Collections",
  },
};

export const INTRO_COLLECTION_SCHEMA = {
  collections: z.string().transform((value) => [value]),
  profile_id: z.string(),
};
