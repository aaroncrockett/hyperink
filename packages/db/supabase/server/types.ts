import type {
  SignInWithPasswordCredentials,
  SupabaseClient,
  VerifyOtpParams,
  AuthResponse,
  UserResponse,
} from "@supabase/supabase-js";

import type { FileObject, StorageError } from "@supabase/storage-js";

// --- Auth ---

export type SignInWithPassword = (
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type SignUp = (
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type ExchangeCodeForSession = (code: string) => Promise<AuthResponse>;

export type VerifyOtp = (config: VerifyOtpParams) => Promise<AuthResponse>;

export type GetUser = (client: SupabaseClient) => Promise<UserResponse>;

// --- Upload ---

export type UploadFileParams = {
  bucket: string;
  path: string;
  file: File | Blob;
};

// ❌ DELETE THIS
// import type { FileObject, StorageError } from "@supabase/storage-js";

// --- Upload ---

export type UploadFile = (
  params: UploadFileParams,
) => Promise<
  ReturnType<SupabaseClient["storage"]["from"]>["upload"] extends (
    ...args: any
  ) => infer R
    ? Awaited<R>
    : never
>;

export type RemoveFile = (
  params: RemoveFileParams,
) => Promise<
  ReturnType<SupabaseClient["storage"]["from"]>["remove"] extends (
    ...args: any
  ) => infer R
    ? Awaited<R>
    : never
>;

export type RemoveFileParams = {
  bucket: string;
  path: string;
};

export type RemoveFileResponse = {
  data: FileObject[] | null;
  error: StorageError | null;
};
