"use client";
import { cn } from "@hyperinkstudio/utils";

import { ReactNode, ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  action: ComponentPropsWithoutRef<"form">["action"];
  children: ReactNode;
  padding?: string;
  space?: string;
  submitText?: string;
};

export function Form({
  action,
  children,
  className,
  padding = "",
  space = "space-y-4",
  submitText = "Submit",
  ...props
}: FormProps) {
  return (
    <form action={action} className={cn(padding, space, className)} {...props}>
      {children}
      <button type="submit" className="btn preset-filled-secondary-400-600">
        {submitText}
      </button>
    </form>
  );
}
