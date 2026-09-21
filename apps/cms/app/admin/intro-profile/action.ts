"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { METADATA_ITEMS_SCHEMA, CHECK_LIST_ITEMS_SCHEMA } from "./data";
import { getUserProfile } from "@hyperink/api-domain-helpers/profile";

import { z } from "zod";
//
// import { createProfile } from "@hyperink/api";
// import { zodIssuesToErrors } from "@hyperink/utils";
//
// import { INTRO_PROFILE_SCHEMA } from "@/business/profile";
//
import { createSSClient } from "@/auth/server";

export async function createIntroProfileData(
  formData: FormData,
): Promise<void> {
  const formDataObject = Object.fromEntries(formData.entries());

  const itemsSchema = z.object(METADATA_ITEMS_SCHEMA);

  const itemsResult = itemsSchema.safeParse(formDataObject);

  const schema = z.object(CHECK_LIST_ITEMS_SCHEMA);

  const checkListResults = schema.safeParse(formDataObject);

  const checkListItems = Object.entries(checkListResults)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const client = await createSSClient();

  // if (!result.success) {
  //   console.log(result.error);
  //   return;
  // }

  // if (!result.success) {
  //   console.log(result.error);
  //   return;
  // }
  // const result = INTRO_PROFILE_SCHEMA.safeParse(formDataObject);
  // if (!result.success) {
  //   console.error(
  //     "There was an error parsing the intro profile:",
  //     zodIssuesToErrors(result.error.issues),
  //   );
  //   return;
  // }
  // const parsedData = result.data;
  // const to_verify = [
  //   parsedData.pref_instagram && "instagram",
  //   parsedData.pref_bsky && "blue_sky",
  //   parsedData.pref_phone && "phone",
  //   parsedData.pref_email && "email",
  // ].filter((val): val is string => Boolean(val));
  // const ssClient = await createSSClient();
  // const params = {
  //   id: parsedData.id,
  //   bsky_id: parsedData.bsky_id,
  //   email: parsedData.email,
  //   instagram_id: parsedData.instagram_id,
  //   phone: parsedData.phone,
  //   preferred_name: parsedData.preferred_name,
  //   to_verify: to_verify,
  // };
  // const { error } = await createProfile(ssClient, params);
  // if (error) {
  //   console.error(error);
  // }
  // revalidatePath("/admin");
  // redirect("/");
}
