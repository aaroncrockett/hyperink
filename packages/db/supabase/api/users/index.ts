import type { ServerClient } from "@/db/types";

const table = "profile";

export async function getProfileByUserId(client: ServerClient, userId: string) {
  const { data, error } = await client
    .from(table)
    .select()
    .eq("id", userId)
    .single();

  return { data, error };
}
