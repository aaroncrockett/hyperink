"use server";

import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";

import { updateFlash } from "@hyperink/api-domain-helpers/flash";

// // 3rd party
import z from "zod";
// // Next
import { redirect } from "next/navigation";

import { createSSClient, getAuthedUser } from "@/auth/server";
// //
import { EDIT_FLASH_SCHEMA } from "./data";

type UploadFlashState = {
  error: HIError | null;
};

export async function updateFlashAction(
  prevState: UploadFlashState,
  formData: FormData,
): Promise<UploadFlashState> {
  const client = await createSSClient();
  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return { error: { message: "no user" } };

  const validatedData = EDIT_FLASH_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedData.success) {
    const errors = zodIssuesToErrors(validatedData.error?.issues ?? []);

    return {
      error: { message: errors.message ?? "edit flash error" },
    };
  }

  const { error } = await updateFlash(client, validatedData.data, [
    { id: user.id },
  ]);

  if (error) {
    return {
      error: { message: error.message ?? "edit flash error" },
    };
  }

  return {
    error: null,
  };
}
