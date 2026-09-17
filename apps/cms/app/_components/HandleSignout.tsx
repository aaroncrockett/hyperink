"use client";
import { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
//
import { signOut } from "@hyperink/service-providers";
//
import { createBrowserClient } from "@/auth/client";

export function SignOut({
  useButton = true,
  ...props
}: Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  useButton?: boolean;
}) {
  const router = useRouter();
  const handleSignOut = async () => {
    const client = createBrowserClient();

    const { error } = await signOut(client);

    if (error) {
      console.error(error);
      return;
    }

    router.push("/login");
  };

  if (useButton) {
    return (
      <button onClick={handleSignOut} {...props}>
        Sign out
      </button>
    );
  }

  return (
    <span
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSignOut();
        }
      }}
      role="button"
      tabIndex={0}
      onClick={handleSignOut}
      {...props}
    >
      Sign out
    </span>
  );
}
