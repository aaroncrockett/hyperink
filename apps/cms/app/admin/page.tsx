import Link from "next/link";
import {
  createServerClientAndAuth,
  getAuthedUser,
  getProfileId,
} from "@/utils/db/server";
import type { Client } from "@/utils/db/server";

export default async function AdminPage() {
  const authedClient: Client = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  let userId: string | undefined = undefined;

  if (user) {
    const { data } = await getProfileId(authedClient, user.id);
    userId = data?.id?.toString() ?? undefined;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 bg-slate-100">
      <h1 className="text-3xl">ADMIN</h1>

      {userId ? (
        <p>Hello {user?.user_metadata.full_name}</p>
      ) : (
        <>
          Looks like you haven&apos;t created your profile yet, bro.
          <button className="btn">Create Profile</button>
        </>
      )}
    </div>
  );
}
