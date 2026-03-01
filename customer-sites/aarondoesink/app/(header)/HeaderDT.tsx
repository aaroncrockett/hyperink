import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export default function HeaderDT({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("", className)} {...props}>
      Header DT
      {children}
    </header>
  );
}
