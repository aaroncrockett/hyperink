import type { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/";

type InputProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  defaultValue?: string;
  dir?: "row" | "col";
  disabled?: boolean;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColorCls?: string;
  id: string;
  inputUtilCls?: string;
  inputCls?: string;
  label: string;
  labelCls?: string;
  labelWeightCls?: string;
  labelUtilCls?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  wrapperCls?: string;
  wrapperMarginCls?: string;
  wrapperGap?: string;
  wrapperLayoutOpts?: string;
};

export function Input({
  defaultValue,
  dir = "col",
  disabled = false,
  errorCls,
  errors = {},
  errorTxtColorCls = "text-red-500",
  id,
  inputCls,
  inputUtilCls = "input",
  label,
  labelCls = "label font-bold",
  labelWeightCls = "font-bold",
  labelUtilCls = "label",
  name,
  readOnly,
  required = false,
  type = "text",
  value,
  wrapperCls,
  wrapperMarginCls = "m-0",
  wrapperGap = "gap-1",
  wrapperLayoutOpts = "justify-start",
  ...props
}: InputProps) {
  const computedLayout = dir === "row" ? "flex flex-row" : "flex flex-col";
  return (
    <div
      className={cn(
        computedLayout,
        wrapperMarginCls,
        wrapperCls,
        wrapperGap,
        wrapperLayoutOpts,
      )}
      {...props}
    >
      {type !== "hidden" && (
        <label
          htmlFor={id}
          className={cn(labelCls, labelWeightCls, labelUtilCls)}
        >
          {required && "*"} {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        {...(value !== undefined ? { value } : {})}
        className={cn(inputUtilCls, inputCls)}
        disabled={disabled}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColorCls, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
