import type { Database } from "./types";
import { createClient } from "@supabase/supabase-js";

export const createServiceClient = (dbUrl: string, serviceKey: string) =>
  createClient<Database>(dbUrl, serviceKey);
