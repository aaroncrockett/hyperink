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
    <div lang="en" className="h-screen">
      <div className="grid grid-cols-[220px_1fr] bg-surface-50-950 h-full">
        <div className="bg-surface-700-300 pt-3 p-2">
          {userData && userData.pvtProfileId && (
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

        {userData && userData.pvtProfileId && (
          <div className="p-4 w-full">{children}</div>
        )}

        {!userData && <div>No User -- create one</div>}
      </div>
    </div>
  );
}
