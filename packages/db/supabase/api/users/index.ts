import type { ServerClient } from "@/utils/db/types";

const table = "profile";

export async function getProfileId(client: ServerClient, userId: string) {
  const { data, error } = await client
    .from(table)
    .select("id")
    .eq("id", userId)
    .single();

  return { data, error };
}
