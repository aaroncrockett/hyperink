import type { ComponentPropsWithoutRef, ChangeEvent } from "react";

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
  errors?: Record<string, string> | null;
  id?: string;
  inputUtilClassName?: string;
  label?: string;
  labelClassName?: string;
  labelUtilClassName?: string;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
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
  errors = {},
  id,
  inputUtilClassName = "hI-input hI-input-layout",
  label,
  labelClassName,
  labelUtilClassName = "hI-input-label",
  name,
  readOnly,
  required = false,
  type = "text",
  value,
  wrapperClassName,
  wrapperUtilClassName = "hI-input-wrapper hI-input-wrap-align",
  ...props
}: InputProps) {
  const computedLayout = dir === "row" ? "flex flex-row" : "flex flex-col";
  const inputName = name ? name : id;
  return (
    <div className={cn(computedLayout, wrapperClassName)}>
      {type !== "hidden" && (
        <label htmlFor={id} className={cn(labelClassName)}>
          {required && "*"} {label}
        </label>
      )}
      <input
        className={cn(inputUtilClassName, props.className)}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={inputName}
        onChange={props.onChange}
        readOnly={readOnly}
        required={required}
        type={type}
        {...(value !== undefined ? { value } : {})}
        {...props}
      />
      {desc && <div className={cn(descUtilClassName, descClassName)}></div>}

      <div className={cn(errorUtilClassName, errorClassName)}></div>
    </div>
  );
}
