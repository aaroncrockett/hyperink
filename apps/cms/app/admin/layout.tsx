// React
import type { ReactNode } from "react";
// @ locals
import { NAV_ADMIN_LIST } from "@/app/consts";
// Locals
import { Nav } from "./_components/Nav";
import { getUserData } from "./getUserData";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const userData = await getUserData();
  return (
    <>
      {userData && userData.pvtProfileId && (
        <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr]  ">
          <div className="hidden lg:block bg-surface-800-200">
            <Nav ulCls="h-full w-auto" layout="col" links={NAV_ADMIN_LIST} />
          </div>
          <main className="w-full">{children}</main>
        </div>
      )}

      {!userData && <div>No User -- create one</div>}
    </>
  );
}
