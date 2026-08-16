// React
import type { ReactNode } from "react";
// Local components
import { NavWrapper } from "./_components/NavWrapper";
import { NavFooter } from "./_components/NavFooter";
// Locals
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
        <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] xl:grid-cols-[300px_1fr] w-full h-full ">
          <div className="hidden lg:block bg-surface-800-200">
            <NavWrapper />
          </div>
          <div className="flex flex-col h-full">
            <main className="flex-1">{children}</main>

            <footer className="sticky bottom-0 w-full h-auto mx-auto lg:hidden ">
              <NavFooter className="flex w-full h-full gap-4 p-4 lg:hidden bg-surface-900-100" />
            </footer>
          </div>
        </div>
      )}

      {!userData && <div>No User -- create one</div>}
    </>
  );
}
