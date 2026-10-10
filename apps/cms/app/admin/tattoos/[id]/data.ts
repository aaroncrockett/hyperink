import { z } from "zod";

export { uploadFileMetadata as editTattooMetadata } from "@/app/admin/tattoos/upload/data";

export { type TattooUIPublic } from "@/app/admin/tattoos/data";

export const EDIT_TATTOO_SCHEMA = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().max(125),
});
