import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type PageProps = ComponentPropsWithoutRef<"div">;

export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={cn("w-full lg:w-xl", className)} {...props}>
      {children}
    </div>
  );
}
