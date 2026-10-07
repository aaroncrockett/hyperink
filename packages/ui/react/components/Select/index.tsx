import { cn } from "@hyperink/utils";
import React from "react";
import type { ComponentPropsWithoutRef } from "react";

type SelectOption = {
  label: string;
  value: string;
  [key: string]: unknown;
};

type SelectProps = ComponentPropsWithoutRef<"select"> & {
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
  label?: string;
  labelClassName?: string;
  labelUtilClassName?: string;
  name?: string;
  options: SelectOption[];
  optionsClassName?: string;
  optionsUtilClassName?: string;
  placeholder?: string;
  required?: boolean;
  selectUtilClassName?: string;
  textColorUtilClassName?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  wrapperAlignUtilClassName?: string;
  wrapperGapUtilClassName?: string;
  wrapperClassName?: string;
  wrapperUtilClassName?: string;
};

export function Select({
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
  label,
  labelClassName = "hI-input-label",
  labelUtilClassName,
  name,
  options,
  optionsClassName,
  optionsUtilClassName,
  required = false,
  selectUtilClassName = "hI-input hI-input-layout",
  textColorUtilClassName = "hI-input-text-color",
  type = "text",
  value,
  wrapperClassName,
  wrapperAlignUtilClassName,
  wrapperGapUtilClassName,
  wrapperUtilClassName = "hI-input-wrapper",

  ...props
}: SelectProps) {
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

  const selectName = name ? name : id;

  return (
    <div
      className={cn(
        computedLayout,
        appliedGapUtilClassName,
        appliedWrapperAlign,
        wrapperClassName,
        wrapperUtilClassName,
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

      <select
        id={id}
        name={selectName}
        required={required}
        disabled={disabled}
        className={cn(
          selectUtilClassName,
          textColorUtilClassName,
          props.className,
        )}

        {...props}
        {...(value !== undefined ? { value } : { defaultValue })}
      >
        {!required && <option value="">Select...</option>}

        {options &&
          options.map((option) => (
            <option
              className={cn(optionsClassName, optionsUtilClassName)}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
      </select>
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
