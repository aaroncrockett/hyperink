// import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import {
  createServerClientAndAuth as createClientAndAuth,
  exchangeCodeForSession,
  getUser,
  insertRow,
  removeFile,
  uploadFile,
  verifyOtp,
  signInWithPassword,
  signUp,
  signInWithOAuth,
} from "@inktree/db";

import type { SupabaseConfig, Client, Database } from "@inktree/db";

export type { Client };

export {
  exchangeCodeForSession,
  getUser,
  verifyOtp,
  signInWithPassword,
  signUp,
  signInWithOAuth,
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

type TableName = keyof Database["public"]["Tables"];

type UploadParams<T extends TableName> = Partial<
  Database["public"]["Tables"][T]["Insert"]
>;

export async function uploadImage<T extends TableName>(
  authedClient: Client,
  bucket: string,
  table: T,
  file: File,
  params: UploadParams<"user_images">,
) {
  const path = `${params.user_id}/${crypto.randomUUID()}`;
  const { data, error } = await uploadFile(authedClient, {
    bucket,
    file,
    path: `${params.user_id}/${crypto.randomUUID()}`,
  });

  if (error) throw error;

  const { error: dbError } = await insertRow(authedClient, table, params);

  if (dbError) {
    await removeFile(authedClient, { bucket, path });
    throw dbError;
  }
}
