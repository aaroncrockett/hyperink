import type { Client, FlashRecord } from "@hyperinkstudio/services";
import { TABLE_FLASH as TABLE } from "./consts";

export async function getFlash(
  authedClient: Client,
  fields: (keyof FlashRecord)[] = [],
  limit?: number,
  orderedByPinned: boolean = true,
): Promise<{
  data: Partial<FlashRecord>[] | null;
  error: Error | null;
}> {
  const select = fields.length ? fields.join(",") : "*";

  let query = authedClient.from(TABLE).select(select);

  if (orderedByPinned) {
    query = query.order("pinned_order", {
      ascending: true,
      nullsFirst: false,
    });
  }

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("error getting flash  from supabase");
  }

  return {
    data: data as Partial<FlashRecord>[] | null,
    error,
  };
}

export async function getFlashByCollection(
  authedClient: Client,
  collection: FlashRecord["collection"],
  fields: (keyof FlashRecord)[] = [],
  limit?: number,
  orderedByPinned: boolean = true,
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

  let query = authedClient.from(TABLE).select(select);

  query = query.eq("collection", collection);

  if (orderedByPinned) {
    query = query.order("pinned_order", {
      ascending: true,
      nullsFirst: false,
    });
  }

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("error getting flash by collection from supabase");
  }

  return {
    data: data as Partial<FlashRecord>[] | null,
    error,
  };
}
