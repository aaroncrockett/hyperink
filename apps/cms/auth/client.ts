import { createBrowserClient as createBrowserClientDb } from "@hyperink/service-providers";

export function createBrowserClient() {
  return createBrowserClientDb(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
