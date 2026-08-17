"use server";
import z from "zod";
// @/app
import { getUserData } from "@/app/admin/getUserData";

// @/db
import {
  uploadFlashImage,
  FLASH_FILE_SCHEMA,
  FLASH_UPLOAD_FORM_SCHEMA,
} from "@/business/flash";
// Hyperink"
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import { createSSClient } from "@/auth/server";

// type TaggingOptionKey = keyof z.infer<typeof taggingOptsSchema>;

type OptionsFormState = {
  errors: Record<string, string> | null;
};

export async function uploadFlashImgAndRecord(
  prevState: OptionsFormState,
  formData: FormData,
): Promise<OptionsFormState> {
  const actionResults: OptionsFormState = {
    errors: null,
  };

  const { pvtProfileId } = await getUserData();

  const file = formData.get("file");

  const fileMetadata = formData.get("file_metadata");

  if (!file) {
    return {
      errors: {
        file_metadata: "Flash upload  is required.",
      },
    };
  }

  if (!fileMetadata) {
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
    return {
      errors: {
        file_metadata: "Invalid file metadata.",
      },
    };
  }

  const parsedFile = FLASH_FILE_SCHEMA.safeParse(file);

  const parsedForm = FLASH_UPLOAD_FORM_SCHEMA.safeParse(parsedMetadata.data);

  if (!parsedFile.success) {
    const { issues } = parsedFile.error;

    const zodErrors = zodIssuesToErrors(issues);

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    const zodErrors = zodIssuesToErrors(issues);

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  if (parsedFile.data === undefined || parsedForm.data === undefined) {
    actionResults.errors = { data: "undefined data or file." };
    return actionResults;
  }

  const ssClient = await createSSClient();

  const { error } = await uploadFlashImage(
    ssClient,
    parsedFile.data,
    pvtProfileId,
    {
      readable_name: parsedForm.data[0].readable_name,
      total_availability: parsedForm.data[0].total_availability,
      // ...
    },
  );

  if (error) {
    console.error(error);
    actionResults.errors = {
      ...actionResults.errors,
      dbError: "Failed at uploading file.",
    };
    return actionResults;
  }
  console.log("WE AARE AT THE END");

  // actionResults.name = name;

  // const resultsData = data?.[name];

  // const resultsDataString = Array.isArray(resultsData)
  //   ? resultsData.filter(Boolean).join(",")
  //   : String(resultsData ?? "");

  // actionResults.options = resultsDataString;

  return actionResults;
}
