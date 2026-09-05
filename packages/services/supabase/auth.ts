import type {
  ExchangeCodeForSession,
  GetUser,
  SignInWithPassword,
  SignUp,
  VerifyOtp,
  SignInWithOAuth,
} from "./server/types";

export const verifyOtp: VerifyOtp = async (client, data) => {
  return client.auth.verifyOtp(data);
};

export const signInWithPassword: SignInWithPassword = async (client, data) => {
  return client.auth.signInWithPassword(data);
};

export const signUp: SignUp = async (client, data) => {
  return client.auth.signUp(data);
};
export const signInWithOAuth: SignInWithOAuth = async (client, data) => {
  return client.auth.signInWithOAuth(data);
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
