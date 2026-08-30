import { Client } from "@hyperinkstudio/backend-services";

import { TABLE_FLASH } from "../consts";

import { FlashRecord } from "@hyperinkstudio/backend-services";

export async function getFlashOrderedByInColl(
  client: Client,
  collection: FlashRecord["collection"],
  fields: (keyof FlashRecord)[] = [],
): Promise<{
  data: Partial<FlashRecord>[] | null;
  error: string | Error | null;
}> {
  if (collection === null) {
    console.error(
      "null collection, which shouldn't be. a default collection should be made at signup. at least one collection should remain after deletion.",
    );
    return { data: null, error: "collection is null" };
  }

  if (!fields.length) {
    console.error("need to include at least one collection");
    return { data: null, error: "collection is null" };
  }

  const select = fields.join(",");

  let query = client.from(TABLE_FLASH).select(select);

  query = query.eq("collection", collection);

  query = query.not("pinned_order", "is", null).order("pinned_order", {
    ascending: true,
  });

  const { data, error } = await query;

  if (error) {
    console.error("error getting flash by collection from supabase");
  }

  return {
    data: data as Partial<FlashRecord>[] | null,
    error,
  };
}
