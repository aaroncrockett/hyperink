import type { ReactNode } from "react";

import AdminNav from "./_components/AdminNav";

import {
  createServerClientAndAuth,
  getAuthedUser,
  getProfileId,
} from "@/utils/db/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  let userId: string | undefined;

  if (user) {
    const { data } = await getProfileId(authedClient, user.id);
    userId = data?.id?.toString();
  }

  return (
    <div lang="en" className="h-screen">
      <div className="grid grid-cols-[220px_1fr] bg-surface-50-950 h-full">
        {userId ? <AdminNav /> : <>fill out yo profile</>}

        <div className="p-4 w-full">{children}</div>
      </div>
    </div>
  );
}
