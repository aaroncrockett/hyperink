"use client";

import Header from "./(header)/Header";

import { useActiveBreakpoint } from "@inktree/hooks";

import { BREAKPOINTS } from "@/constants";
import { cn } from "@/utils/cn";

const layoutComponentProps = {
  desktop: {
    cls: "",
  },
  mobile: {
    cls: "",
  },
};

// TODO: possible refactoring if repeated
const mediaQueries = {
  mobile: `(max-width: ${BREAKPOINTS.sm})`,
} as const;

type Screen = "desktop" | "mobile";

export default function Layouts({ children }: { children: React.ReactNode }) {
  const screen: Screen = useActiveBreakpoint(mediaQueries) ?? "desktop";

  return (
    <div
      className={cn(
        "h-screen grid grid-rows-[auto_1fr_auto]",
        layoutComponentProps[screen].cls,
      )}
    >
      <Header type={screen} />
      {children}
    </div>
  );
}
