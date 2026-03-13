"use client";

import MenuMobile from "./(header)/MenuMobile";
import MenuDesktop from "./(header)/MenuDesktop";

import Header from "./(header)/Header";

import { useActiveBreakpoint } from "@inktree/hooks";
import { BREAKPOINTS } from "@/constants";
import { cn } from "@/utils/cn";

const mediaQueries = {
  mobile: `(max-width: ${BREAKPOINTS.sm})`,
} as const;

type Screen = "mobile" | "desktop";

const layoutComponentProps = {
  desktop: {
    layout: "grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto]",
    nav: "col-start-1 row-start-1 row-span-3",
    header: "col-start-2 row-start-1",
    main: "col-start-2 row-start-2 noise-bg",
    footer: "col-start-2 row-start-3",
  },
  mobile: {
    layout: "grid grid-rows-[auto_1fr_auto]",
    nav: "hidden",
    header: "",
    main: "noise-bg",
    footer: "",
  },
} as const;

export default function Layouts({ children }: { children: React.ReactNode }) {
  const screen: Screen = useActiveBreakpoint(mediaQueries) ?? "desktop";

  const cls = layoutComponentProps[screen];

  return (
    <div className={cn("h-screen", cls.layout)}>
      <div className={cn("bg-gray-100  ", cls.nav)}>
        {screen === "desktop" && <MenuDesktop>asdf</MenuDesktop>}
      </div>

      <Header type={screen} className={cls.header}>
        {screen === "mobile" && (
          <MenuMobile>
            <p>menu</p>
          </MenuMobile>
        )}
      </Header>

      <main className={cls.main}>{children}</main>

      <footer className={cn("bg-gray-200", cls.footer)}>Footer</footer>
    </div>
  );
}
