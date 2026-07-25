import { type AuthUser } from "@/db/types";

import type { ComponentPropsWithoutRef } from "react";

type IsLoggedInProps = ComponentPropsWithoutRef<"div"> & {
  user: AuthUser;
};
export function IsLoggedIn({ user, children }: IsLoggedInProps) {
  return (
    <div className="flex flex-col  gap-4">
      <p>Hello {user?.user_metadata.full_name}</p>
      <div>{children}</div>
    </div>
  );
}
