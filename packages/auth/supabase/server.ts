import { createServerClient } from "@supabase/ssr";
import type { Cookies, AuthClient, SignInWithOauthConfig } from "../types";

let client: any = null;

const authClient: AuthClient = {
  async signInWithOAuth(config: SignInWithOauthConfig) {
    if (config.provider === "google") {
      return await client.auth.signInWithOAuth(config);
    }
  },
  async signInWithPassword(data: unknown) {
    return client.auth.signInWithPassword(data);
  },
  async signUp(data: unknown) {
    return client.auth.signUp(data);
  },
  async exchangeCodeForSession(code: string) {
    return client.auth.exchangeCodeForSession(code);
  },
  async verifyOtp(config: unknown) {
    return client.auth.verifyOtp(config);
  },
  async getUser() {
    return client.auth.getUser();
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
