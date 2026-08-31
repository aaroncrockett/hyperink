import type { Client } from "@hyperinkstudio/services";
import { TABLE_PROFILE as TABLE } from "./consts";

export async function getProfileByArtistId(client: Client, artistId: string) {
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

export async function getProfileByUserId(client: Client, userId: string) {
  const { data, error } = await client
    .from(TABLE)
    .select()
    .eq("id", userId)
    .single();

  return { data, error };
}

export async function getProfileIdByUserId(client: Client, userId: string) {
  const { data, error } = await client
    .from(TABLE)
    .select("id")
    .eq("id", userId)
    .single();

  return { data, error };
}
