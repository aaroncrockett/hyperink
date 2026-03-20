type Vendor = "supabase" | "firebase";

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
  action: string;
}
interface FirebaseConfig {
  clientType: "server" | "client";
  publicKey: string;
  publicUrl: string;
}

type VendorConfigMap = {
  supabase: SupabaseConfig;
  firebase: FirebaseConfig;
};

export type InitAuthFunction = <K extends Vendor>(
  vendor: K,
  config: VendorConfigMap[K],
) => Promise<VendorConfigMap[K]>;
