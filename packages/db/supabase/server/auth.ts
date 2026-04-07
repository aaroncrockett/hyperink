import type {
  ExchangeCodeForSession,
  GetUser,
  SignInWithPassword,
  SignUp,
} from "./types";

export const signInWithPassword: SignInWithPassword = async (client, data) => {
  return client.auth.signInWithPassword(data);
};

export const signUp: SignUp = async (client, data) => {
  return client.auth.signUp(data);
};

export const exchangeCodeForSession: ExchangeCodeForSession = async (
  client,
  code,
) => {
  return client.auth.exchangeCodeForSession(code);
};

export const getUser: GetUser = async (client) => {
  return client.auth.getUser();
};
