import { cookies } from "next/headers";
import {
  createSSClient as createClient,
  exchangeCodeForSession,
  getUser,
  verifyOtp,
  signInWithPassword,
  signUp,
  signInWithOAuth,
} from "@hyperinkstudio/backend-services";

import type { SupabaseConfig, Client } from "@hyperinkstudio/backend-services";

export {
  exchangeCodeForSession,
  getUser as getAuthedUser,
  signInWithOAuth,
  signInWithPassword,
  signUp,
  verifyOtp,
};

type CreateSSClientOptions = {
  noCache?: boolean;
};

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

const fetchWithoutCache = (url: RequestInfo | URL, options?: FetchOptions) => {
  return fetch(url, {
    ...options,
    cache: "no-store",
  });
};

export async function createSSClient(
  options?: CreateSSClientOptions,
): Promise<Client> {
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
    publicKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    publicUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    cookieMethods: cookieMethods,
    ...(options?.noCache && {
      global: {
        fetch: fetchWithoutCache,
      },
    }),
  };

  return createClient(config);
}
