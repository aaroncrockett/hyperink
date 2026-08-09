"use client";

import { signInWithGoogle } from "./actions";

export default function SignInWithGoogle() {
  return (
    <form action={signInWithGoogle}>
      <button className="btn preset-filled-secondary-400-600" type="submit">
        Sign in with Google
      </button>
    </form>
  );
}
