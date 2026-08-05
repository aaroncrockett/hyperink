import { cn } from "@hyperinkstudio/utils/";
import React from "react";
import type { ComponentPropsWithoutRef } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  defaultValue?: string;
  disabled?: boolean;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColorCls?: string;
  id: string;
  inputUtilCls?: string;
  inputCls?: string;
  label: string;
  labelClassName?: string;
  name: string;
  options: SelectOption[];
  optCls?: string;
  required?: boolean;
  value?: string;
  wrapperCls?: string;
  wrapperMarginCls?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export function Select({
  defaultValue,
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColorCls = "text-error-500",
  id,
  inputUtilCls = "select",
  inputCls,
  label,
  labelClassName = "label font-bold",
  name,
  options,
  optCls,
  required = false,
  value,
  wrapperCls,
  wrapperMarginCls = "m-0",
  onChange,
  ...props
}: SelectProps) {
  return (
    <div className={cn(wrapperMarginCls, wrapperCls)} {...props}>
      <label htmlFor={id} className={labelClassName}>
        {required && "*"} {label}
      </label>

      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        className={cn(inputUtilCls, inputCls)}
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
