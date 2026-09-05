"use server";
// 3rd party
import z from "zod";
// Next
import { redirect } from "next/navigation";
// Hyperink"
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
// @
import { getUserData } from "@/app/getUserData";
//
import {
  uploadFlashImage,
  FLASH_FILE_SCHEMA,
  FLASH_UPLOAD_FORM_SCHEMA,
} from "@/business/flash";
//
import { createSSClient } from "@/auth/server";
//
import { INTERNAL_FLASH_LINKS } from "@/consts";

type UploadFormState = {
  errors: Record<string, string> | null;
};

export async function uploadFlashImgAndRecord(
  prevState: UploadFormState,
  formData: FormData,
): Promise<UploadFormState> {
  const actionResults: UploadFormState = {
    errors: null,
  };

  const { pvtProfileId } = await getUserData();

  const files = formData
    .getAll("file")
    .filter((value): value is File => value instanceof File);

  const fileMetadata = formData.get("file_metadata");

  const singleCollection = formData.get("collection");

  const parsedSingleCollection =
    singleCollection !== null
      ? z.string().min(1).safeParse(singleCollection)
      : null;

  if (parsedSingleCollection && !parsedSingleCollection.success) {
    return {
      errors: {
        collection: "Invalid collection.",
      },
    };
  }

  if (!files) {
    console.error("1: Flash upload  is required.");
    return {
      errors: {
        file_metadata: "Flash upload  is required.",
      },
    };
  }

  if (!fileMetadata) {
    console.error("2: File metadata is required.");
    return {
      errors: {
        file_metadata: "File metadata is required.",
      },
    };
  }

  const parsedMetadata = z
    .string()
    .transform((value) => JSON.parse(value))
    .safeParse(fileMetadata);

  if (!parsedMetadata.success) {
    console.error("3: Invalid file metadata.");
    return {
      errors: {
        file_metadata: "Invalid file metadata.",
      },
    };
  }

  const parsedFiles = files.map((file) => FLASH_FILE_SCHEMA.safeParse(file));

  const parsedForm = FLASH_UPLOAD_FORM_SCHEMA.safeParse(parsedMetadata.data);

  const invalidFile = parsedFiles.find((result) => !result.success);

  if (invalidFile && !invalidFile.success) {
    const { issues } = invalidFile.error;

    const zodErrors = zodIssuesToErrors(issues);

    console.error("4: FLASH_FILE_SCHEMA");

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    const zodErrors = zodIssuesToErrors(issues);

    console.error("5: Zod error from FLASH_UPLOAD_FORM_SCHEMA");

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  if (
    parsedFiles.some((result) => result.data === undefined) ||
    parsedForm.data === undefined
  ) {
    console.error("6: Undefined data or file.");
    actionResults.errors = { data: "Undefined data or file." };
    return actionResults;
  }

  const ssClient = await createSSClient();

  for (let i = 0; i < parsedFiles.length; i++) {
    const file = parsedFiles[i].data;
    const metadata = parsedForm.data[i];

    if (parsedSingleCollection) {
      metadata.collection = parsedSingleCollection.data;
    }

    if (!file || !metadata) {
      console.error("7: Undefined file or metadata loopo.");
      actionResults.errors = { data: "Undefined file or metadata loop." };
      return actionResults;
    }

    const { error } = await uploadFlashImage(
      ssClient,
      file,
      pvtProfileId,
      metadata,
    );

    if (error) {
      console.error(error);
      actionResults.errors = {
        ...actionResults.errors,
        dbError: "Failed at uploading file.",
      };
      return actionResults;
    }
  }

  redirect(INTERNAL_FLASH_LINKS.flash.href);
}
