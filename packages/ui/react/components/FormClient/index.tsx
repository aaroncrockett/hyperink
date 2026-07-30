"use client";
import { cn } from "@hyperinkstudio/utils";

import { ReactNode, ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  action: ComponentPropsWithoutRef<"form">["action"];
  children: ReactNode;
  padding?: string;
  space?: string;
  submitText?: string;
  submitBtnColor?: string;
  submitBtnCls?: string;
  submitDisabled?: boolean;
};

export function Form({
  action,
  children,
  className,
  padding = "",
  space = "space-y-4",
  submitText = "Submit",
  submitBtnColor = "preset-filled-secondary-400-600",
  submitBtnCls = "btn",
  submitDisabled = false,
  ...props
}: FormProps) {
  return (
    <form action={action} className={cn(padding, space, className)} {...props}>
      {children}
      <button
        disabled={submitDisabled}
        type="submit"
        className={cn(submitBtnCls, submitBtnColor)}
      >
        {submitText}
      </button>
    </form>
  );
}
