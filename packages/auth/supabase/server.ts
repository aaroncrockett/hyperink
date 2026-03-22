import { createServerClient } from "@supabase/ssr";
import type { Cookies, AuthClient } from "../types";

let client: any = null;

const authClient: AuthClient = {
  signInWithPassword: (data: unknown) => {
    return client.auth.signInWithPassword(data);
  },
  signUp: (data: unknown) => {
    return client.auth.signUp(data);
  },
  verifyOtp(config: unknown) {
    return client.auth.verifyOtp(config);
  },
};

export const createSbServerClient = (
  publicKey: string,
  publicUrl: string,
  cookieMethods: Cookies,
) => {
  client = createServerClient(publicUrl, publicKey, cookieMethods);

  return authClient;
};
