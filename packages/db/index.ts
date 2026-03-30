import type { CreateClient, SupabaseConfig, Client } from "./types";
import { createSbServerClient } from "./supabase/server";
export const createClient: CreateClient = async (vendor, config) => {
  const types = ["server", "client"] as const;

  if (!types.includes(config.clientType)) {
    throw new Error(
      `Invalid type "${config.clientType}". Must be one of ${types.join(", ")}`,
    );
  }

  return createSbServerClient(
    config.publicKey,
    config.publicUrl,
    config.cookieMethods,
  );
};
export type { SupabaseConfig, Client };
