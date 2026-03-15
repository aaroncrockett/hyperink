import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type PageProps = ComponentPropsWithoutRef<"div">;

export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={cn("w-full lg:w-xl p-2 pt-3 lg:p-4", className)} {...props}>
      {children}
    </div>
  );
}
