import { createBrowserClient as createBrowserClientDb } from "@hyperinkstudio/backend-services";

export function createBrowserClient() {
  return createBrowserClientDb(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
