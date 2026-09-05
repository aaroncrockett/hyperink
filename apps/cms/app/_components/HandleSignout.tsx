"use client";

import { signOut } from "@hyperinkstudio/services";
//
import { createBrowserClient } from "@/auth/client";
import { Button } from "@/ui";
export function SignOut({
  useButton = true,
  cls,
}: {
  useButton?: boolean;
  cls?: string;
}) {
  const handleSignOut = async () => {
    const client = createBrowserClient();

    const { error } = await signOut(client);

    if (error) {
      console.error(error);
      return;
    }

    window.location.href = "/login";
  };

  return useButton ? (
    <Button onClick={handleSignOut}>Sign out</Button>
  ) : (
    <span
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSignOut();
        }
      }}
      role="button"
      tabIndex={0}
      onClick={handleSignOut}
      className={cls}
    >
      Sign out
    </span>
  );
}
