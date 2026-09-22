"use client";
import { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
//
import { signOut } from "@hyperink/service-providers";
import { cn } from "@hyperink/utils";
//
import { createBrowserClient } from "@/auth/client";

export function SignOut({
  useButton = true,
  classNameUtils = "hI-btn-secondary",
  ...props
}: Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  useButton?: boolean;
  classNameUtils?: string;
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
      <button
        className={cn(props.className, classNameUtils)}
        onClick={handleSignOut}
      >
        Sign out
      </button>
    );
  }

  return (
    <span
      {...props}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSignOut();
        }
      }}
      role="button"
      tabIndex={0}
      onClick={handleSignOut}
    >
      Sign out
    </span>
  );
}
