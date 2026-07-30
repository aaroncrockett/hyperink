import { cn } from "@hyperinkstudio/utils/";
import React from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColor?: string;
  id: string;
  inputClass?: string;
  label: string;
  labelClassName?: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export function Select({
  className = "",
  defaultValue,
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColor = "text-red-500",
  id,
  inputClass = "select",
  label,
  labelClassName = "label font-bold",
  name,
  options,
  required = false,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className={cn("m-0", className)}>
      <label htmlFor={id} className={labelClassName}>
        {required && "*"} {label}
      </label>

      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        className={cn(inputClass)}
        onChange={onChange}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
      >
        {!required && <option value="">Select...</option>}

        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>

      {errors?.[name] && (
        <p className={cn(errorTxtColor, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
