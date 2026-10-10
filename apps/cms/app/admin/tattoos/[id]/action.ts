"use server";

import { HIError } from "@hyperink/api-domain-helpers";

import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";

import { updateTattoos } from "@hyperink/api-domain-helpers/tattoo";
// // Next
import { redirect } from "next/navigation";

import { createSSClient, getAuthedUser } from "@/auth/server";
// //
import { EDIT_TATTOO_SCHEMA } from "./data";

type UploadTattooState = {
  error: HIError | null;
};

export async function updateTattooAction(
  prevState: UploadTattooState,
  formData: FormData,
): Promise<UploadTattooState> {
  const client = await createSSClient();
  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return { error: { message: "no user" } };

  const validatedData = EDIT_TATTOO_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedData.success) {
    const errors = zodIssuesToErrors(validatedData.error?.issues ?? []);

    return {
      error: { message: errors.message ?? "edit tattoo error" },
    };
  }

  const { error } = await updateTattoos(client, validatedData.data, [
    { id: validatedData.data.id },
    { profile_tattoo_id: user.id },
  ]);

  if (error) {
    return {
      error: { message: error.message ?? "edit tatoo error" },
    };
  }

  redirect("/admin/tattoos");
}
