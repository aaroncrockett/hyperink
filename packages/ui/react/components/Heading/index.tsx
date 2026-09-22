import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@hyperink/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  utilClassName?: string;
};

export function Heading({
  children,
  as: Component = "h1",
  utilClassName = "hI-header",
  className,
  ...props
}: HeadingProps) {
  return (
    <Component {...props} className={cn(utilClassName, className)}>
      {children}
    </Component>
  );
}
