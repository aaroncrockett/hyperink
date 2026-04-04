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
  async uploadFile({ bucket, path, file }) {
    const { data, error } = await clientClosure.storage
      .from(bucket)
      .upload(path, file);

    if (error) return { path: "", bucket, error };

    return { path: data.path, bucket, error: null };
  },
  async removeFile({ bucket, path }) {
    const { data, error } = await clientClosure.storage
      .from(bucket)
      .remove([path]);
    return { data, error };
  },
  async insertRow({ table, values }) {
    const { data, error } = await clientClosure.from(table).insert(values);
    return { data, error };
  },
  async selectFrom({ table, values }) {
    const { data, error } = await clientClosure
      .from(table)
      .select(values.select)
      .contains(values.contains.key, values.contains.value)
      .order(values.order.key, values.order.value);

    return { data, error };
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
