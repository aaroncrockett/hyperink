import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type PageProps = ComponentPropsWithoutRef<"div">;

export default function Page({ children, className, ...props }: PageProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-275 p-4 lg:p-4 py-8 lg:py-10 flex flex-col space-y-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
