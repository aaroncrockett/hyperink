"use server";
import { redirect } from "next/navigation";
//
import { initCollectionTagsAndResetRemaining } from "@hyperink/api-domain-helpers/options";
import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";
//
import {
  INTRO_COLLECTION_SCHEMA,
  type IntroCollectionSchemaTypes,
} from "./data";
import { createSSClient } from "@/auth/server";

export async function createCollection(formData: FormData) {
  const validatedResult = INTRO_COLLECTION_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedResult.success) {
    const errors = zodIssuesToErrors(validatedResult.error?.issues ?? []);

    console.error(errors.message);
    redirect("/error");
  }

  const client = await createSSClient();

  const data: IntroCollectionSchemaTypes = validatedResult.data;

  const { error } = await initCollectionTagsAndResetRemaining(
    client,
    {
      collections: data.collections,
    },

    data.profile_id,
  );
  if (error) {
    console.error("initCollectionTagsAndResetRemaining error");
    redirect("/error");
  }
  redirect("/admin/options/");
}
