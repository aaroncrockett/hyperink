import type { Client } from "@hyperinkstudio/db";
import { TABLE_PROFILE as TABLE } from "./consts";

export async function getProfileIdByArtistId(client: Client, artistId: string) {
  const { data, error } = await client
    .from(TABLE)
    .select("id")
    .eq("artist_id", artistId)
    .single();

  return {
    data: data?.id ?? null,
    error,
  };
}
