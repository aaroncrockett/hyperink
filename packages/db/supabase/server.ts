import { createServerClient } from "@supabase/ssr";
import type { Cookies, Client, SignInWithOauthConfig } from "../types";

let clientClosure: any = null;

const client: Client = {
  async signInWithOAuth(config: SignInWithOauthConfig) {
    if (config.provider === "google") {
      return await clientClosure.auth.signInWithOAuth(config);
    }
  },
  async signInWithPassword(data: unknown) {
    return clientClosure.auth.signInWithPassword(data);
  },
  async signUp(data: unknown) {
    return clientClosure.auth.signUp(data);
  },
  async exchangeCodeForSession(code: string) {
    return clientClosure.auth.exchangeCodeForSession(code);
  },
  async verifyOtp(config: unknown) {
    return clientClosure.auth.verifyOtp(config);
  },
  async getUser() {
    return clientClosure.auth.getUser();
  },
};

export const createSbServerClient = (
  publicKey: string,
  publicUrl: string,
  cookieMethods: Cookies,
) => {
  clientClosure = createServerClient(publicUrl, publicKey, cookieMethods);

  return client;
};
