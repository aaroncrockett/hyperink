import { cookies } from "next/headers";
import {
  createServerClientAndAuth as createClientAndAuth,
  exchangeCodeForSession,
  getUser,
  getProfileId,
  verifyOtp,
  signInWithPassword,
  signUp,
  signInWithOAuth,
  uploadUserImage,
} from "@inktree/db";

import type {
  SupabaseConfig,
  Client,
  TattooImage,
  ClientTattoo,
  Profile,
} from "@inktree/db";

export type { Client, TattooImage, ClientTattoo, Profile };

export {
  exchangeCodeForSession,
  getProfileId,
  getUser as getAuthedUser,
  signInWithOAuth,
  signInWithPassword,
  signUp,
  uploadUserImage,
  verifyOtp,
};

export async function createServerClientAndAuth(): Promise<Client> {
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
  };

  return createClientAndAuth(config);
}
