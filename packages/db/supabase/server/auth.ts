import type {
  ExchangeCodeForSession,
  GetUser,
  SignInWithPassword,
  SignUp,
} from "./types";

import { createOrGetClient } from "./index";
import { SupabaseClient } from "@supabase/supabase-js";

export const signInWithPassword: SignInWithPassword = async (data) => {
  const client = await createOrGetClient();
  return client.auth.signInWithPassword(data);
};

export const signUp: SignUp = async (data) => {
  const client = await createOrGetClient();
  return client.auth.signUp(data);
};

export const exchangeCodeForSession: ExchangeCodeForSession = async (code) => {
  const client = await createOrGetClient();
  return client.auth.exchangeCodeForSession(code);
};

export const getUser: GetUser = async () => {
  const client = await createOrGetClient();
  return client.auth.getUser();
};
