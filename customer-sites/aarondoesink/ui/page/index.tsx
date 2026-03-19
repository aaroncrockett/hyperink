import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type PageProps = ComponentPropsWithoutRef<"div">;

export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div
      className={cn("w-full lg:w-xl p-4 lg:p-4 pt-6 lg:pt-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
