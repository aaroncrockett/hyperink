import { cn } from "@hyperinkstudio/utils/";
import React from "react";
import type { ComponentPropsWithoutRef } from "react";

type SelectOption = {
  label: string;
  value: string;
  [key: string]: unknown;
};

type SelectProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  defaultValue?: string;
  disabled?: boolean;
  dir?: "row" | "col";
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColorCls?: string;
  id?: string;
  inputCls?: string;
  inputPaddingCls?: string;
  inputUtilCls?: string;
  label?: string;
  labelCls?: string;
  labelSizeCls?: string;
  labelColorCls?: string;
  labelWeightCls?: string;
  multiple?: boolean;
  name?: string;
  optCls?: string;
  options: SelectOption[];
  required?: boolean;
  value?: string;
  wrapperCls?: string;
  wrapperLayoutOpts?: string;
  wrapperGap?: string;
  wrapperMarginCls?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export function Select({
  dir = "col",
  defaultValue,
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColorCls = "text-error-500",
  id,
  inputCls,
  inputPaddingCls = "p-2.5",
  inputUtilCls = "select",
  label,
  labelCls,
  labelSizeCls,
  labelColorCls,
  labelWeightCls = "font-bold",
  multiple = false,
  name,
  optCls,
  options,
  required = false,
  value,
  wrapperCls,
  wrapperGap = "gap-1",
  wrapperLayoutOpts = "justify-start",
  wrapperMarginCls = "m-0",
  onChange,
  ...props
}: SelectProps) {
  const computedLayout = dir === "row" ? "flex flex-row" : "flex flex-col";

  return (
    <div
      className={cn(
        computedLayout,
        wrapperLayoutOpts,
        wrapperMarginCls,
        wrapperGap,
        wrapperCls,
      )}
      {...props}
    >
      <label
        htmlFor={id}
        className={cn(
          labelCls,
          labelColorCls,
          labelColorCls,
          labelSizeCls,
          labelWeightCls,
        )}
      >
        {required && "*"} {label}
      </label>

      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        className={cn(inputUtilCls, inputCls, inputPaddingCls)}
        multiple={multiple}
        onChange={onChange}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
      >
        {!required && <option value="">Select...</option>}

        {options &&
          options.map((option) => (
            <option className="optCls" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>

      {errors?.[name] && (
        <p className={cn(errorTxtColorCls, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
