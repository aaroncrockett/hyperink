//create or get client
import type { SupabaseClient } from "@supabase/supabase-js";
let client: undefined | SupabaseClient = undefined;

import type { CreateClient, SupabaseConfig } from "../types";

import { createServerClient } from "@supabase/ssr";

export const createServerClientAndAuth: CreateClient = async (
  config: SupabaseConfig,
) => {
  return createServerClient(config.publicUrl, config.publicKey, {
    cookies: config.cookieMethods.cookies,
  });
};

export type { SupabaseClient };
export * from "./auth";
export * from "./storage";
export * from "./api";
