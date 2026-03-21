// import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import {
  createClient as createServerClient,
  type SupabaseConfig,
  type AuthClient,
} from "@inktree/auth";

export async function createClient(): Promise<AuthClient> {
  type CookieItem = {
    name: string;
    value: string;
    options?: Record<string, unknown>;
  };

  const cookieStore = await cookies();

  const cookieMethods = {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookieItem[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  };

  const config: SupabaseConfig = {
    clientType: "server",
    publicKey: "",
    publicUrl: "",
    cookieMethods: cookieMethods,
  };

  return createServerClient("supabase", config);
}
