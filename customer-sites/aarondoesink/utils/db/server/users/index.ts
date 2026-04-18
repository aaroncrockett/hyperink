/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { Client } from "@inktree/db";

export type { Client };

const table = "profile";

export async function getProfileId(client: Client, userId: string) {
  const { data, error } = await client
    .from(table)
    .select("id")
    .eq("id", userId)
    .single();

  return { data, error };
}
