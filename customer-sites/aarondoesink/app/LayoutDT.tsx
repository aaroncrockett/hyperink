import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export default function LayoutDT({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("", className)} {...props}>
      LayoutDT
      {children}
    </div>
  );
}
