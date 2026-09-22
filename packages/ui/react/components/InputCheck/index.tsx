import type { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperink/utils/";

type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  checked?: boolean;
  error?: string | null;
  errorClassName?: string;
  errorUtilClassName?: string;
  id?: string;
  inputUtilClassName?: string;
  label?: string;
  labelClassName?: string;
  labelOrder?: "before" | "after";
  labelUtilClassName?: string;
  name?: string;
  textColorUtilClassName?: string;
  wrapperAlignUtilClassName?: string;
  wrapperClassName?: string;
  wrapperUtilClassName?: string;
};

export function InputCheck({
  checked,
  error,
  errorClassName,
  errorUtilClassName = "hI-input-error",
  id,
  inputUtilClassName = "hI-input-check",
  label,
  labelClassName,
  labelOrder = "after",
  labelUtilClassName = "hI-input-label",
  name,
  textColorUtilClassName = "hI-input-text-color",
  wrapperClassName,
  wrapperUtilClassName = "hI-input-check-wrap hI-input-check-wrap-align hI-input-check-wrap-layout",
  ...props
}: CheckboxProps) {
  return (
    <div className={cn(wrapperClassName, wrapperUtilClassName)}>
      {labelOrder === "before" && (
        <label
          htmlFor={id}
          className={cn(
            labelClassName,
            labelUtilClassName,
            textColorUtilClassName,
          )}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        className={cn(props.className, inputUtilClassName)}
      />
      {labelOrder === "after" && (
        <label
          htmlFor={id}
          className={cn(
            labelClassName,
            labelUtilClassName,
            textColorUtilClassName,
          )}
        >
          {label}
        </label>
      )}
      {error && (
        <div className={cn(errorUtilClassName, errorClassName)}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
