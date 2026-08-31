import type {
  ExchangeCodeForSession,
  GetUser,
  SignInWithPassword,
  SignUp,
  VerifyOtp,
  SignInWithOAuth,
} from "./server/types";

export const verifyOtp: VerifyOtp = async (authedClient, data) => {
  return authedClient.auth.verifyOtp(data);
};

export const signInWithPassword: SignInWithPassword = async (
  authedClient,
  data,
) => {
  return authedClient.auth.signInWithPassword(data);
};

export const signUp: SignUp = async (authedClient, data) => {
  return authedClient.auth.signUp(data);
};
export const signInWithOAuth: SignInWithOAuth = async (authedClient, data) => {
  return authedClient.auth.signInWithOAuth(data);
};

export const exchangeCodeForSession: ExchangeCodeForSession = async (
  authedClient,
  code,
) => {
  return authedClient.auth.exchangeCodeForSession(code);
};

export const getUser: GetUser = async (authedClient) => {
  return authedClient.auth.getUser();
};
