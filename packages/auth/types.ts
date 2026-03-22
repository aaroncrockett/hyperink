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

export type AuthClient = {
  signInWithPassword: SignInWithPassword;
  signUp: SignUp;
  verifyOtp: VerifyOtp;
  signInWithOAuth: SignInWithOauth;
  exchangeCodeForSession: ExchangeCodeForSession;
  getUser: GetUser;
};

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

export type CreateClient = <K extends Vendor>(
  vendor: K,
  config: VendorConfigMap[K],
) => Promise<AuthClient>;

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
