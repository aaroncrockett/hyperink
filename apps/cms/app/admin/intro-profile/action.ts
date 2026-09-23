"use server";
import { redirect } from "next/navigation";
import { INTRO_PROFILE_SCHEMA, CHECK_LIST_SCHEMA } from "./data";
import { createUserProfile } from "@hyperink/api-domain-helpers/profile";
import {
  validateFormData,
  type ErrorPageData,
} from "@hyperink/api-domain-helpers";

import { createSSClient } from "@/auth/server";

import type { ProfileToVerify } from "@hyperink/api/profile";

export async function createIntroProfileData(
  previousState: ErrorPageData,
  formData: FormData,
): Promise<ErrorPageData> {
  const validatedMetadata = validateFormData(formData, INTRO_PROFILE_SCHEMA);

  if (validatedMetadata.errors) {
    return {
      errors: { ...validatedMetadata.errors },
    };
  }

  const validatedToVerifyData = validateFormData(formData, CHECK_LIST_SCHEMA);

  if (validatedToVerifyData.errors) {
    return {
      errors: { ...validatedToVerifyData.errors },
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
      errors: { ...error },
    };
  }

  redirect("/admin");
}
