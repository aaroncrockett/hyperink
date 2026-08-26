"use client";
import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";
//hyperink
import { cn } from "@hyperinkstudio/utils";

type FormProps = Omit<ComponentPropsWithoutRef<"form">, "children"> & {
  children: ReactNode;
  submitBtnCls?: string;
  submitBtnColorCls?: string;
  submitBtnSizeCls?: string;
  submitBtnWrapperCls?: string;
  submitBtnUtilCls?: string;
  submitDisabled?: boolean;
  submitText?: string;
};

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      action,
      children,
      className,
      submitBtnCls,
      submitBtnUtilCls = "btn",
      submitBtnSizeCls,
      submitBtnColorCls = "preset-filled-secondary-500",
      submitBtnWrapperCls,
      submitDisabled = false,
      submitText = "Submit",
      ...props
    },
    ref,
  ) => {
    return (
      <form ref={ref} action={action} className={cn(className)} {...props}>
        {children}

        <div className={cn(submitBtnWrapperCls)}>
          <button
            type="submit"
            disabled={submitDisabled}
            className={cn(
              submitBtnCls,
              submitBtnColorCls,
              submitBtnSizeCls,
              submitBtnUtilCls,
            )}
          >
            {submitText}
          </button>
        </div>
      </form>
    );
  },
);

Form.displayName = "Form";
