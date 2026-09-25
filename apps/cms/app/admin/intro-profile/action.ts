"use server";
import { redirect } from "next/navigation";
import { INTRO_PROFILE_SCHEMA, CHECK_LIST_SCHEMA } from "./data";
import { createUserProfile } from "@hyperink/api-domain-helpers/profile";
import {
  zodIssuesToErrors,
  type HIFormData,
} from "@hyperink/api-domain-helpers";

import { createSSClient } from "@/auth/server";

import type { ProfileToVerify } from "@hyperink/api/profile";

export async function createIntroProfileData(
  previousState: HIFormData,
  formData: FormData,
): Promise<HIFormData> {
  const validatedMetadata = INTRO_PROFILE_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedMetadata.success) {
    const errors = zodIssuesToErrors(validatedMetadata.error?.issues ?? []);

    return {
      error: { message: errors.message },
      data: null,
    };
  }

  const validatedToVerifyData = CHECK_LIST_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedToVerifyData.success) {
    const errors = zodIssuesToErrors(validatedToVerifyData.error?.issues ?? []);

    return {
      error: { message: errors.message },
      data: null,
    };
  }

  // If user checks a contact type, it will return true
  // use the key of true items to send as as ProfileToVery
  const validatedCheckListItems = Object.entries(
    validatedToVerifyData.data ?? {},
  )
    .filter(([, value]) => value)
    .map(([key]) => key) as ProfileToVerify;

  const validatedData = {
    ...validatedMetadata.data,
    to_verify: validatedCheckListItems,
  };

  const client = await createSSClient();

  const { error } = await createUserProfile(client, validatedData);

  if (error) {
    return {
      error: { ...error },
      data: null,
    };
  }

  redirect("/admin");
}
