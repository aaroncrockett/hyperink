import type {
  SignInWithPasswordCredentials,
  SupabaseClient,
  VerifyOtpParams,
  AuthResponse,
  OAuthResponse,
  UserResponse,
  SignInWithOAuthCredentials,
  SignOut,
} from "@supabase/supabase-js";

import type { FileObject, StorageError } from "@supabase/storage-js";

// --- Auth ---

export type SignInWithOAuth = (
  authedClient: SupabaseClient,
  data: SignInWithOAuthCredentials,
) => Promise<OAuthResponse>;

export type SignInWithPassword = (
  authedClient: SupabaseClient,
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type SignUp = (
  authedClient: SupabaseClient,
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type SignOut = (
  authedClient: SupabaseClient,
) => ReturnType<SupabaseClient["auth"]["signOut"]>;

export type ExchangeCodeForSession = (
  authedClient: SupabaseClient,
  code: string,
) => Promise<AuthResponse>;

export type VerifyOtp = (
  authedClient: SupabaseClient,
  config: VerifyOtpParams,
) => Promise<AuthResponse>;

export type GetUser = (authedClient: SupabaseClient) => Promise<UserResponse>;

// --- Storage ---

export type UploadFileParams = {
  bucket: string;
  path: string;
  file: File | Blob;
};

export type UploadFile = (
  authedClient: SupabaseClient,
  params: UploadFileParams,
) => Promise<
  ReturnType<SupabaseClient["storage"]["from"]>["upload"] extends (
    ...args: any
  ) => infer R
    ? Awaited<R>
    : never
>;

export type RemoveFile = (
  authedClient: SupabaseClient,
  params: RemoveFileParams,
) => Promise<
  ReturnType<SupabaseClient["storage"]["from"]>["remove"] extends (
    ...args: any
  ) => infer R
    ? Awaited<R>
    : never
>;

export type GetPublicURLParams = RemoveFileParams;

export type GetPublicURLResponse = ReturnType<
  ReturnType<SupabaseClient["storage"]["from"]>["getPublicUrl"]
>;

export type GetPublicURL = (
  authedClient: SupabaseClient,
  params: GetPublicURLParams,
) => Promise<GetPublicURLResponse>;

export type RemoveFileParams = {
  bucket: string;
  path: string;
};

export type RemoveFileResponse = {
  data: FileObject[] | null;
  error: StorageError | null;
};
