// React
import type { ReactNode } from "react";

// Local components
import { LayoutNavWrapper } from "./_components/LayoutNavWrapper";
import { LayoutNavFooter } from "./_components/LayoutNavFooter";
import { LayoutSubNav } from "./_components/LayoutSubNav";
// Locals
import { getUserData } from "./getUserData";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const userData = await getUserData();
  return (
    <>
      {userData && userData.pvtProfileId && (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(auto)_1fr] lg:grid-cols-[minmax(200px,auto)_1fr]">
          <div className="hidden lg:block bg-surface-800-200">
            <LayoutNavWrapper />
          </div>
          <div className="flex flex-col h-full min-h-0 mt-2 md:mt-1 max-w-300 ">
            <LayoutSubNav
              layoutCls="flex flex-col md:gap-4"
              widthCls="w-full"
              paddingCls="px-2 pt-1 lg:pt-4 md:pt-3 lg:px-4 md:px-3"
              marginCls="mx-auto"
            />
            <main className="flex-1 h-full">{children}</main>

            <footer className="sticky bottom-0 w-full h-auto mx-auto shrink-0 lg:hidden">
              <LayoutNavFooter className="flex w-full h-full gap-4 p-4 lg:hidden bg-surface-900-100" />
            </footer>
          </div>
        </div>
      )}

      {!userData && <div>No User -- create one</div>}
    </>
  );
}
