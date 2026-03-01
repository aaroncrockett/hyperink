import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export default function HeaderMobile({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("shadow sticky top-0 z-10 ", className)} {...props}>
      Header Mobile
      {children}
    </header>
  );
}
