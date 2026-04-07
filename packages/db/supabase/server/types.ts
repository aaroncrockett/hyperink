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
  client: SupabaseClient,
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type SignUp = (
  client: SupabaseClient,
  data: SignInWithPasswordCredentials,
) => Promise<AuthResponse>;

export type ExchangeCodeForSession = (
  client: SupabaseClient,
  code: string,
) => Promise<AuthResponse>;

export type VerifyOtp = (
  client: SupabaseClient,
  config: VerifyOtpParams,
) => Promise<AuthResponse>;

export type GetUser = (client: SupabaseClient) => Promise<UserResponse>;

// --- Upload ---

export type UploadFileParams = {
  bucket: string;
  path: string;
  file: File | Blob;
};

export type UploadFileResponse = {
  data: FileObject[] | null;
  error: StorageError | null;
};

export type UploadFile = (
  client: SupabaseClient,
  params: UploadFileParams,
) => Promise<UploadFileResponse>;

// --- Remove ---

export type RemoveFileParams = {
  bucket: string;
  path: string;
};

export type RemoveFileResponse = {
  data: FileObject[] | null;
  error: StorageError | null;
};

export type RemoveFile = (
  client: SupabaseClient,
  params: RemoveFileParams,
) => Promise<RemoveFileResponse>;
