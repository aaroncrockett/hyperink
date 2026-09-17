//create or get client

import type { CreateClient, SupabaseConfig } from "./types/exported-supabase";

import { createServerClient as createClient } from "@supabase/ssr";

export const createServerClient: CreateClient = async (
  config: SupabaseConfig,
) => {
  return createClient(config.publicUrl, config.publicKey, {
    cookies: config.cookieMethods.cookies,
  });
};
