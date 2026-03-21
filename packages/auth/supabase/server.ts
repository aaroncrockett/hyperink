import { createServerClient } from "@supabase/ssr";
import type { Cookies, AuthClient } from "../types";

let client: any = null;

const authClient: AuthClient = {
  signInWithPassword: (data: unknown) => {
    return client.auth.signInWithPassword(data);
  },
};

export const createSbServerClient = (
  publicUrl: string,
  publicKey: string,
  cookieMethods: Cookies,
) => {
  client = createServerClient(publicUrl, publicKey, cookieMethods);

  return authClient;
};
