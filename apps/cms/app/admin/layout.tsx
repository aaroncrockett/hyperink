// React
import type { ReactNode } from "react";
// @ locals
import { NAV_ADMIN_LIST } from "@/app/consts";
// Locals
import { Nav } from "./_components/Nav";

import { createSSClient, getAuthedUser, getProfileByUserId } from "@/db/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const dbClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(dbClient);

  let userId: string | undefined;

  if (user) {
    const { data } = await getProfileByUserId(dbClient, user.id);
    userId = data?.id;
  }

  return (
    <div lang="en" className="h-screen">
      <div className="grid grid-cols-[220px_1fr] bg-surface-50-950 h-full">
        <div className="bg-surface-700-300 pt-3 p-2">
          {userId && (
            <Nav
              linkCurrentCls="text-surface-500 bg-surface-50-950"
              linkClsHover="hover:bg-surface-50-950 rounded"
              layout="col"
              linkCls="transition-colors block"
              layoutGap="gap-0"
              links={NAV_ADMIN_LIST}
            />
          )}
        </div>

        <div className="p-4 w-full">{children}</div>
      </div>
    </div>
  );
}
