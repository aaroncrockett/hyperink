"use server";
import { redirect } from "next/navigation";
//
import { createUsersCollectionTags } from "@hyperink/api-domain-helpers/options";
import { validateFormData } from "@hyperink/api-domain-helpers";
//
import { INTRO_COLLECTION_SCHEMA } from "@/app/admin/options/tagging/create-collection/data";
import { createSSClient } from "@/auth/server";

export async function createCollection(formData: FormData) {
  const validatedMetadata = validateFormData(formData, INTRO_COLLECTION_SCHEMA);

  if (validatedMetadata.errors || !validatedMetadata.data) {
    console.error(validatedMetadata.errors);
    redirect("/error");
  }

  const client = await createSSClient();

  const { profile_id: profileId, ...rest } = validatedMetadata.data;

  const { error } = await createUsersCollectionTags(client, rest, profileId);
  redirect("/admin/options/tagging");
}
