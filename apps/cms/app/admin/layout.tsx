// React
import type { ReactNode } from "react";
// Locals
import { NavClientWrapper } from "./_components/NavClientWrapper";
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
        <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] w-full ">
          <div className="hidden lg:block bg-surface-800-200">
            <NavClientWrapper />
          </div>
          <main className="w-full">{children}</main>
        </div>
      )}

      {!userData && <div>No User -- create one</div>}
    </>
  );
}
