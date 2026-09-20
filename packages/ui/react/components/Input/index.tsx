import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@hyperink/utils/";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  desc?: string;
  descClassName?: string;
  descUtilClassName?: string;
  defaultValue?: string;
  dir?: "row" | "col";
  disabled?: boolean;
  errorClassName?: string;
  errorUtilClassName?: string;
  error?: string | null;
  id?: string;
  inputUtilClassName?: string;
  label?: string;
  labelClassName?: string;
  labelUtilClassName?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  textColorUtilClassName?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  wrapperAlignUtilClassName?: string;
  wrapperGapUtilClassName?: string;
  wrapperClassName?: string;
  wrapperUtilClassName?: string;
};

export function Input({
  defaultValue,
  desc,
  descClassName,
  descUtilClassName = "hI-input-desc",
  dir = "col",
  disabled = false,
  errorClassName,
  errorUtilClassName = "hI-input-error",
  error = null,
  id,
  inputUtilClassName = "hI-input hI-input-layout",
  label,
  labelClassName,
  labelUtilClassName = "hI-input-label",
  name,
  placeholder,
  readOnly,
  required = false,
  textColorUtilClassName = "hI-input-text-color",
  type = "text",
  value,
  wrapperClassName,
  wrapperAlignUtilClassName,
  wrapperGapUtilClassName,
  wrapperUtilClassName = "hI-input-wrapper",
  ...props
}: InputProps) {
  const computedLayout = dir === "row" ? "flex flex-row" : "flex flex-col";

  const computedWrapperAlign =
    dir === "row" ? "justify-start items-center" : "justify-start";

  const computedWrapperGap = dir === "row" ? "gap-2" : "gap-1";

  const appliedWrapperAlign = wrapperAlignUtilClassName
    ? wrapperAlignUtilClassName
    : computedWrapperAlign;

  const appliedGapUtilClassName = wrapperGapUtilClassName
    ? wrapperGapUtilClassName
    : computedWrapperGap;

  const inputName = name ? name : id;
  return (
    <div
      className={cn(
        computedLayout,
        wrapperClassName,
        wrapperUtilClassName,
        appliedWrapperAlign,
        appliedGapUtilClassName,
      )}
    >
      {type !== "hidden" && (
        <label
          htmlFor={id}
          className={cn(
            labelUtilClassName,
            textColorUtilClassName,
            labelClassName,
            "whitespace-nowrap",
          )}
        >
          {required && "*"} {label}
        </label>
      )}
      <input
        className={cn(
          inputUtilClassName,
          textColorUtilClassName,
          props.className,
        )}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={inputName}
        onChange={props.onChange}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        type={type}
        {...(value !== undefined ? { value } : {})}
        {...props}
      />
      {desc && (
        <div
          className={cn(
            descUtilClassName,
            textColorUtilClassName,
            descClassName,
          )}
        >
          <p>{desc}</p>
        </div>
      )}
      {error && (
        <div className={cn(errorUtilClassName, errorClassName)}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
