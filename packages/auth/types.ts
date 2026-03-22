import type {
  AuthApiError,
  Session,
  EmailOtpType,
} from "@supabase/supabase-js";

export type Vendor = "supabase";

export type VendorConfigMap = {
  supabase: SupabaseConfig;
};

export type AuthClient = {
  signInWithPassword: SignInWithPassword;
  signUp: SignUp;
  verifyOtp: VerifyOtp;
};

export type VerifyOtp = (config: {
  email?: string;
  phone?: string;
  token_hash?: string;
  type: EmailOtpType;
}) => Promise<{
  data: { session: Session | null; user: any | null };
  error: AuthApiError | null;
}>;
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
