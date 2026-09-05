"use client";

import { signOut } from "@hyperinkstudio/services";
//
import { createBrowserClient } from "@/auth/client";
import { Button } from "@/ui";
export function SignOut() {
  const handleSignOut = async () => {
    const client = createBrowserClient();

    const { error } = await signOut(client);

    if (error) {
      console.error(error);
      return;
    }

    window.location.href = "/login";
  };

  return <Button onClick={handleSignOut}>Sign out</Button>;
}
