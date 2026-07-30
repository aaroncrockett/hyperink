"use client";
import { cn } from "@hyperinkstudio/utils";

import { ReactNode, ComponentPropsWithoutRef,   forwardRef } from "react";

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

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
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
    },
    ref,
  ) => {
    return (
      <form
        ref={ref}
        action={action}
        className={cn(padding, space, className)}
        {...props}
      >
        {children}
        <button
          type="submit"
          disabled={submitDisabled}
          className={cn(submitBtnCls, submitBtnColor)}
        >
          {submitText}
        </button>
      </form>
    );
  },
);

Form.displayName = "Form";