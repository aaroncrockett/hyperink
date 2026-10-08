import { z } from "zod";
import { id } from "zod/locales";

export { uploadFileMetadata as editFlashMetadata } from "@/app/admin/flash/upload/data";

export { type FlashUIPublic } from "@/app/admin/flash/data";

export const EDIT_FLASH_SCHEMA = z.object({
  id: z.string(),
  collection: z.string().optional(),
  readable_name: z.string(),
  total_availability: z.coerce
    .number()
    .int()
    .min(1)
    .max(10)
    .optional()
    .optional(),
  description: z.string().max(125),
});
