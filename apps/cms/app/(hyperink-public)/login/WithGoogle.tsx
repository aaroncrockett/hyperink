"use client";

import { signInWithGoogle } from "./actions";

export default function SignInWithGoogle() {
  return (
    <form className="flex justify-center" action={signInWithGoogle}>
      <button className="hyper-btn" type="submit">
        Sign in with Google
      </button>
    </form>
  );
}
