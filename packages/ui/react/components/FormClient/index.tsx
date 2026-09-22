"use client";
import { ComponentPropsWithoutRef, forwardRef } from "react";
//
import { cn } from "@hyperink/utils";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  submitBtnCls?: string;
  submitBtnColorCls?: string;
  submitBtnWrapperCls?: string;
  submitBtnUtilCls?: string;
  submitDisabled?: boolean;
  submitText?: string;
};

export const FormClient = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      action,
      children,
      submitBtnCls,
      submitBtnUtilCls = "hI-btn-secondary",
      submitBtnWrapperCls,
      submitDisabled = false,
      submitText = "Submit",
      ...props
    },
    ref,
  ) => {
    return (
      <form {...props} ref={ref} action={action}>
        {children}

        <div className={submitBtnWrapperCls}>
          <button
            type="submit"
            disabled={submitDisabled}
            className={cn(submitBtnCls, submitBtnUtilCls)}
          >
            {submitText}
          </button>
        </div>
      </form>
    );
  },
);

FormClient.displayName = "Form";
