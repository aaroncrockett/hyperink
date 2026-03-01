"use client";
import { useMatchMediaSize } from "@/hooks";
import { defaultTheme } from "../tailwind.config";
import LayoutMobile from "./LayoutMobile";
import LayoutDT from "./LayoutDT";
import HeaderMobile from "./(header)/HeaderMobile";
import HeaderDT from "./(header)/HeaderDT";

const layoutCls = "h-screen grid";

export default function Layouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSmall = useMatchMediaSize(defaultTheme.screens.sm);
  return (
    <>
      {isSmall ? (
        <LayoutMobile className={layoutCls}>
          <HeaderMobile /> {children}
        </LayoutMobile>
      ) : (
        <LayoutDT className={layoutCls}>
          <HeaderDT /> {children}
        </LayoutDT>
      )}
    </>
  );
}
