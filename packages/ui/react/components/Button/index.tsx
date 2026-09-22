import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperink/utils";

type FormErrorProps = ComponentPropsWithoutRef<"button"> & {
  btnUtilClassName?: string;
  btnClassName?: string;
};

export function Button({
  btnUtilClassName = "",
  btnClassName = "hI-btn",
  children,
  ...props
}: FormErrorProps) {
  return (
    <button {...props} className={cn(btnClassName, btnUtilClassName)}>
      {children}
    </button>
  );
}
