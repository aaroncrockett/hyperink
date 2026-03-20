import { createServerClient } from "@supabase/ssr";
import type { Cookies } from "../types";

export const createSbServerClient = (
  publicUrl: string,
  publicKey: string,
  cookieMethods: Cookies,
  action: string,
) => {
  // if (action === "login-email") {
  //   const client = createServerClient(publicUrl, publicKey, cookieMethods);
  //   client.auth
  //   return client
  // }
  // return createServerClient(publicUrl, publicKey, cookieMethods);
};
