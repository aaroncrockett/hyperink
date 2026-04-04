import type {
  AuthApiError,
  EmailOtpType,
  Session,
  User,
} from "@supabase/supabase-js";

export type Vendor = "supabase";

export type VendorConfigMap = {
  supabase: SupabaseConfig;
};

export type Client = {
  signInWithPassword: SignInWithPassword;
  signUp: SignUp;
  verifyOtp: VerifyOtp;
  signInWithOAuth: SignInWithOauth;
  exchangeCodeForSession: ExchangeCodeForSession;
  getUser: GetUser;
  uploadFile: UploadFile;
  removeFile: RemoveFile;
  insertRow: From;
  selectFrom: From;
};

// Auth

export type SignInWithPassword = (credentials: {
  email: string;
  password: string;
}) => Promise<{
  data: { session: Session | null; user: any | null };
  error: AuthApiError | null;
}>;

export type SignUp = (credentials: {
  email: string;
  password: string;
}) => Promise<{
  data: { session: Session | null; user: any | null };
  error: AuthApiError | null;
}>;

export type SignInWithOauthConfig = {
  provider: string;
  options: unknown;
};

export type SignInWithOauth = (config: SignInWithOauthConfig) => Promise<{
  data: unknown;
  error: AuthApiError | null;
}>;

export type ExchangeCodeForSession = (code: string) => Promise<{
  error: AuthApiError | null;
}>;

export type VerifyOtp = (config: {
  email?: string;
  phone?: string;
  token_hash?: string;
  type: EmailOtpType;
}) => Promise<{
  data: { session: Session | null; user: any | null };
  error: AuthApiError | null;
}>;

export type GetUser = () => Promise<{
  data: { user: User | null };
  error: AuthApiError | null;
}>;

// Storage

export type StorageUploadResponse = {
  path: string;
  bucket: string;
  error: AuthApiError | null;
};

export type UploadFile = (params: {
  bucket: string;
  path: string;
  file: File | Blob;
}) => Promise<StorageUploadResponse>;

export type RemoveFile = (params: { bucket: string; path: string }) => Promise<{
  data: any;
  error: AuthApiError | null;
}>;

// DB

// 1️⃣ If AuthApiError doesn't exist, define a placeholder
export type AuthApiError = any;

// 2️⃣ The generic From type
export type From = <
  TInsert extends Record<string, any>,
  TResult = unknown,
>(params: {
  table: string;
  values: TInsert;
}) => Promise<{
  data: TResult[] | null;
  error: AuthApiError | null;
}>;

// Create Client

export type CreateClient = <K extends Vendor>(
  vendor: K,
  config: VendorConfigMap[K],
) => Promise<Client>;

export interface Cookies {
  cookies: {
    getAll: () => Array<{
      name: string;
      value: string;
      options?: Record<string, unknown>;
    }>;

    setAll: (
      cookiesToSet: Array<{
        name: string;
        value: string;
        options?: Record<string, unknown>;
      }>,
    ) => void;
  };
}

export interface SupabaseConfig {
  clientType: "server" | "client";
  publicKey: string;
  publicUrl: string;
  cookieMethods: Cookies;
}
