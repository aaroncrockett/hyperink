import type { InitAuthFunction, SupabaseConfig } from "./types";
import { createSbServerClient } from "./supabase/server";

let supabaseClient: ReturnType<typeof createSbServerClient> | null = null;

export const init: InitAuthFunction = async (vendor, config) => {
  if (vendor === "supabase") {
    const supabaseConfig = config as SupabaseConfig;

    const types = ["server", "client"] as const;
    if (!types.includes(supabaseConfig.clientType)) {
      throw new Error(
        `Invalid type "${supabaseConfig.clientType}". Must be one of ${types.join(", ")}`,
      );
      // createSbServerClient()
    }
    if (vendor === "firebase") {
      console.log("firebase");
    }
  }

  return config;
};
