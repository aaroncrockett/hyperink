"use client";
import Image from "next/image";
import MenuMobile from "./(header)/MenuMobile";
import Header from "./(header)/Header";
import Footer from "./(footer)/Footer";
import Nav from "./(nav)/Nav";

import { useActiveBreakpoint } from "@inktree/hooks";
import { BREAKPOINTS } from "@/constants";
import { cn } from "@/utils/cn";

const mediaQueries = {
  mobile: `(max-width: ${BREAKPOINTS.lg})`,
} as const;

type Screen = "mobile" | "desktop";

const layoutComponentProps = {
  desktop: {
    layout: "grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto]",
    main: "col-start-2 row-start-2 noise-bg",
    footer: "col-start-2 row-start-3",
  },
  mobile: {
    layout: "grid grid-rows-[auto_1fr_auto]",
    main: "noise-bg",
    footer: "",
  },
} as const;

export default function Layouts({ children }: { children: React.ReactNode }) {
  const screen: Screen = useActiveBreakpoint(mediaQueries) ?? "desktop";

  const cls = layoutComponentProps[screen];

  return (
    <div className={cn("h-screen", cls.layout)}>
      {screen === "desktop" && <Nav type={screen} />}

      <Header
        lead={
          screen === "mobile" ? (
            <MenuMobile title="hello!">
              {screen === "mobile" && <Nav type={screen} />}
            </MenuMobile>
          ) : undefined
        }
        tail={<button className="btn bg-secondary-500">BookNow</button>}
      >
        <Image
          src="/images/logo-text.svg"
          alt="Aaron Does Ink - Logo"
          width={201}
          height={40}
          className="h-10 w-auto"
        />
      </Header>

      <main className={cls.main}>{children}</main>

      <Footer className={cn("bg-primary-500", cls.footer)}>footer</Footer>
    </div>
  );
}
