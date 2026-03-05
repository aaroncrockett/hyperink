"use client";

import { defaultTheme } from "../tailwind.config";
import { useActiveBreakpoint } from "@inktree/hooks";
import LayoutMobile from "./LayoutMobile";
import LayoutDT from "./LayoutDT";

import HeaderMobile from "./(header)/HeaderMobile";
import HeaderDT from "./(header)/HeaderDT";

const layoutCls = "h-screen grid";

const layoutComponents = {
  mobile: {
    Layout: LayoutMobile,
    Header: HeaderMobile,
  },
  desktop: {
    Layout: LayoutDT,
    Header: HeaderDT,
  },
} as const;

// TODO: possible refactoring if repeated
const mediaQueries = {
  mobile: `(max-width: ${defaultTheme.screens.sm})`,
  desktop: `(min-width: ${parseInt(defaultTheme.screens.sm) + 1} + rem)`,
} as const;

type Screen = keyof typeof layoutComponents;

export default function Layouts({ children }: { children: React.ReactNode }) {
  const screen: Screen | null = useActiveBreakpoint(mediaQueries);

  const { Layout, Header } = layoutComponents[screen ?? "mobile"];

  return (
    <Layout className={layoutCls}>
      <Header />
      {children}
    </Layout>
  );
}
