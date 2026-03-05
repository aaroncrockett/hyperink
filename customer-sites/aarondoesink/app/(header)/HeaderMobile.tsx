import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export default function HeaderMobile({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("shadow sticky top-0 z-10 ", className)} {...props}>
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full p-2 lg:p-4">
        {children}
      </div>
    </header>
  );
}
