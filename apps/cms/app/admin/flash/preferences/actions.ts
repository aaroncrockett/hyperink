"use server";
// 3rd party
// import z from "zod";
// Hyperink"
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
// @
import { getUserData } from "@/app/admin/getUserData";
//
import { type FlashOptions } from "@/business/flash/flashOptions";
//
import {
  upsertFlashOptions,
  FLASH_OPTIONS_FORM_SCHEMA,
} from "@/business/flash/flashOptions";

import { createSSClient } from "@/auth/server";

type PreferencesFormState = {
  errors: Record<string, string> | null;
  data: Partial<FlashOptions> | null;
};

export async function updateFlashPreferences(
  prevState: PreferencesFormState,
  formData: FormData,
): Promise<PreferencesFormState> {
  const actionResults: PreferencesFormState = {
    errors: null,
    data: null,
  };

  const { pvtProfileId } = await getUserData();

  const formDataObject = Object.fromEntries(formData.entries());

  const parsedForm = FLASH_OPTIONS_FORM_SCHEMA.safeParse(formDataObject);

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    const zodErrors = zodIssuesToErrors(issues);

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  const parsedData = parsedForm.data;

  const ssClient = await createSSClient();

  const { data, error } = await upsertFlashOptions(
    ssClient,
    pvtProfileId,
    parsedData,
  );

  if (error) {
    console.error(error);
    actionResults.errors = {
      ...actionResults.errors,
      dbError: "Failed to upload to flash options.",
    };
    return actionResults;
  }

  actionResults.data = {
    ...data,
  };

  return actionResults;
}
