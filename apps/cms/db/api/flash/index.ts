import { z } from "zod";
// hyperink db
import {
  uploadFlash as uploadFlashSrc,
  // Client,
} from "@hyperinkstudio/db";
// hyperink utils
import {
  createDataCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";
// hyperink shared business
import * as BASE from "@hyperinkstudio/shared-business/flash/base";

export const FLASH_UPLOAD_FORM_DATA = createDataCollection({
  readable_name: {
    ...BASE.READABLE_NAME,
    type: "text",
  },
  total_availability: {
    ...BASE.TOTAL_AVAILABILITY,
    type: "number",
  },
});

export const FLASH_UPLOAD_FORM_LIST = getValuesFromCollection(
  FLASH_UPLOAD_FORM_DATA,
);

export const FLASH_UPLOAD_FORM_SCHEMA = z.array(
  z.object({
    readable_name: z.string().min(1),
    total_availability: z.coerce.number().int().min(1).max(10),
  }),
);

export const FLASH_FILE_SCHEMA = z
  .instanceof(File)
  .refine((file) => file.size > 0, "File is empty.")
  .refine(
    (file) => file.size <= 10 * 1024 * 1024,
    "File must be 10 MB or smaller.",
  )
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/webp", "image/avif"].includes(
        file.type,
      ),
    "Unsupported image type.",
  );
// hyperink shared business
// import {
//   // type ProfileTaggingOptions as ProfileTaggingOptions_Src,
//   // type ProfileTaggingOptionsKeys as ProfileTaggingOptionsKeys_Src,
// } from "@hyperinkstudio/shared-business/";

export const uploadFlash = uploadFlashSrc;
