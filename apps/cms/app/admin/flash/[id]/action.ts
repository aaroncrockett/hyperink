import { updateFlash } from "@hyperinkstudio/api";

("use server");
// 3rd party
import z from "zod";
// Next
import { redirect } from "next/navigation";
// Hyperink"
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
// @
import { getUserData } from "@/app/admin/getUserData";
//
import {
  uploadFlashImage,
  FLASH_FILE_SCHEMA,
  FlashRecord,
} from "@/business/flash";
//
import { createSSClient } from "@/auth/server";
//
import { INTERNAL_FLASH_LINKS } from "@/consts";

type UploadFormState = {
  errors: Record<string, string> | null;
  data: FlashRecord;
};

export async function updateFlashRecord(
  prevState: UploadFormState,
  formData: FormData,
): Promise<UploadFormState> {
  const actionResults: UploadFormState = {
    errors: null,
  };
}

await updateFlash(browserClient, {
  id: item.id,
  pinned_order: 2,
});
