"use client";

import { signInWithGoogle } from "./actions";
import { Button } from "@/ui/";

export default function SignInWithGoogle() {
  return (
    <form action={signInWithGoogle}>
      <Button className="btn preset-filled-secondary-400-600" type="submit">
        Sign in with Google
      </Button>
    </form>
  );
}
