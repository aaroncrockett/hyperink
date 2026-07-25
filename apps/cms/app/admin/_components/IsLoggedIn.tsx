import { type User } from "@/db/types";

export function IsLoggedIn({ user }: {}) {
  return <p>Hello {user?.user_metadata.full_name}</p>;
}
