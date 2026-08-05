"use client";
import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";
//hyperink
import { cn } from "@hyperinkstudio/utils";

type FormProps = Omit<
  ComponentPropsWithoutRef<"form">,
   "children"
> & {
  children: ReactNode;
  submitBtnCls?: string;
  submitBtnColorCls?: string;
  submitBtnSizeCls?: string;
  submitDisabled?: boolean;
  submitText?: string;
};

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      action,
      children,
      className,
      submitBtnCls = "btn",
      submitBtnSizeCls,
      submitBtnColorCls = "preset-filled-secondary-500",
      submitDisabled = false,
      submitText = "Submit",
      ...props
    },
    ref,
  ) => {
    return (
      <form
        ref={ref}
        action={action}
        className={className}
        {...props}
      >
        {children}
        <button
          type="submit"
          disabled={submitDisabled}
          className={cn(submitBtnCls, submitBtnColorCls, submitBtnSizeCls)}
        >
          {submitText}
        </button>
      </form>
    );
  },
);

Form.displayName = "Form";
