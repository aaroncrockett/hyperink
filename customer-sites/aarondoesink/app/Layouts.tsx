"use client";
import Image from "next/image";

import MenuMobile from "./(header)/MenuMobile";
import Header from "./(header)/Header";
import Footer from "./(footer)/Footer";
import Nav from "./(nav)/Nav";
import Card from "@/ui/card";

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
    footer: "col-start-2 row-start-3 p-4",
  },
  mobile: {
    layout: "grid grid-rows-[auto_1fr_auto]",
    main: "noise-bg",
    footer: "p-2",
  },
} as const;

export default function Layouts({ children }: { children: React.ReactNode }) {
  const screen: Screen = useActiveBreakpoint(mediaQueries) ?? "desktop";

  const cls = layoutComponentProps[screen];

  return (
    <div className={cn("h-screen", cls.layout)}>
      {screen === "desktop" && (
        <Card className="h-full row-span-3">
          <Nav type={screen} />
        </Card>
      )}

      <Header
        lead={
          screen === "mobile" ? (
            <MenuMobile title="hello!">
              {screen === "mobile" && <Nav type={screen} />}
            </MenuMobile>
          ) : undefined
        }
        tail={<button className="btn bg-secondary-500">Book Now</button>}
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

      <Footer className={cn("bg-primary-500", cls.footer)}>
        {screen === "mobile" && <Nav type="mobile-footer" />}
        {screen === "desktop" && (
          <div>
            Deved By Aaron Does Everything (Tattoos, Web Apps, Web Sites, Web
            Design, Graphic Design, Illustration, Painting)
          </div>
        )}
      </Footer>
    </div>
  );
}
