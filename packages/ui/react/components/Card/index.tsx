
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils/cn";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: string;
  space?: string;
};

export function Card({
  children,
  className,
  padding = "p-4",
  space = "space-y-4",
  ...props
}: CardProps) {
  return (
    <div className={cn(padding, space, className)} {...props}>
      {children}
    </div>
  );
}
