"use server";
import { redirect } from "next/navigation";
//
import { initCollectionTagsAndResetRemaining } from "@hyperink/api-domain-helpers/options";
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

  const { profile_id: profileId, collections } = validatedMetadata.data;

  const { error } = await initCollectionTagsAndResetRemaining(
    client,
    { collections },
    profileId,
  );

  if (error) {
    console.error("initCollectionTagsAndResetRemaining error");
    redirect("/error");
  }
  redirect("/admin/options/");
}
