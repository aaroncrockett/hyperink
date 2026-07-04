import type { Client, UserImage } from "../../../../index";
import { TABLE } from "./consts";

export async function updateUserImage(
  authedClient: Client,
  id: string,
  updates: Partial<UserImage>,
) {
  return authedClient
    .from(TABLE)
    .update(updates)
    .eq("id", id)
    .select()
    .single();
}
