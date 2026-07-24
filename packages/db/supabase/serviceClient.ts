import { createClient } from "@supabase/supabase-js";

export function createServiceClient(dbUrl: string, serviceKey: string) {
  return createClient(dbUrl, serviceKey);
}
