import { z } from "zod";

type TagSelectionSchema = {
  profile_id: z.ZodType;
  type: z.ZodType;
  selected: z.ZodType;
  unselected: z.ZodType;
};

export const TAG_SELECTION_SCHEMA = z.object({
  profile_id: z.string(),
  type: z.string(),
  selected: z.string().optional(),
  unselected: z.string().optional(),
}) satisfies z.ZodObject<TagSelectionSchema>;

export type IntroCollectionSchemaTypes = z.infer<typeof TAG_SELECTION_SCHEMA>;
