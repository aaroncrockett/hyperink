import type { CreateClient } from "./types";

import { createServerClient } from "@supabase/ssr";

export const createClient: CreateClient = async (vendor, config) => {
  const types = ["server", "client"] as const;

  if (!types.includes(config.clientType)) {
    throw new Error(
      `Invalid type "${config.clientType}". Must be one of ${types.join(", ")}`,
    );
  }
  if (config.clientType === "client") {
  }

  return createServerClient(
    config.publicKey,
    config.publicUrl,
    config.cookieMethods,
  );
};
