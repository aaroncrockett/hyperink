import Link from "next/link";
import {
  createServerClientAndAuth,
  getAuthedUser,
  getProfileId,
} from "@/utils/db/server";
import type { Client } from "@/utils/db/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <div lang="en" className="">
      <div className="flex flex-row w-full gap-4 ">
        {userId ? (
          <ul>
            <li>
              <Link href="/admin/create-tattoo-options">
                Create Tattoo Options
              </Link>
            </li>
            <li>
              <Link href="/admin/create-tattoo-record">
                Create a tattoo record
              </Link>
            </li>
            <li>
              <Link href="/admin/upload-image">Upload an image</Link>
            </li>
            <li>
              <Link href="/admin/create-flash">Create Flash</Link>
            </li>
          </ul>
        ) : (
          <>asdf</>
        )}

        {children}
      </div>
    </div>
  );
}
