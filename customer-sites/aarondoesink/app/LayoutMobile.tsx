import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export default function LayoutMobile({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("grid-rows-[auto_1fr_auto]", className)} {...props}>
      {children}
    </div>
  );
}
