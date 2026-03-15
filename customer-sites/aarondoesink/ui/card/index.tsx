import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

const cls = "card p-4 space-y-4";

type CardProps = ComponentPropsWithoutRef<"div">;

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn(cls, className)} {...props}>
      {children}
    </div>
  );
}
