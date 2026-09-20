import type { ReactNode } from "react";
//
import { Nav } from "./_components/layout/Nav";
import { LayoutNavFooter } from "./_components/layout/LayoutNavFooter";
import { LayoutSubNav } from "./_components/layout/LayoutSubNav";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(auto)_1fr] lg:grid-cols-[minmax(200px,auto)_1fr]">
      <div className="hidden lg:block bg-surface-900-100">
        <Nav />
      </div>

      <div className="flex flex-col min-w-0 max-w-300 h-full min-h-0">
        <LayoutSubNav
          layoutCls="flex flex-col md:gap-4"
          widthCls="w-full"
          paddingCls="px-2 pt-1 lg:pt-4 md:pt-3 lg:px-4 md:px-3"
          marginCls="mx-auto"
        />
        <main className="flex-1 bg-surface-100-900 h-full">{children}</main>
        <footer className="lg:hidden bottom-0 sticky mx-auto w-full h-auto shrink-0">
          <LayoutNavFooter className="lg:hidden flex gap-4 bg-surface-800-200 p-4 w-full h-full" />
        </footer>
      </div>
    </div>
  );
}
