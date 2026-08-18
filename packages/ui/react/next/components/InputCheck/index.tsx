import type { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/";

type CheckboxProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  dir?: "row" | "col";
  errorCls?: string;
  errorTxtColorCls?: string;
  errors?: Record<string, string> | null;
  id: string;
  inputCls?: string;
  label: string;
  labelCls?: string;
  labelSizeCls?: string;
  labelColorCls?: string;
  labelUppercaseCls?: string;
  labelWeightCls?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  wrapperCls?: string;
  wrapperGap?: string;
  wrapperLayoutOpts?: string;
};

export function InputCheck({
  dir = "row",
  errorCls,
  errorTxtColorCls = "text-error-500",
  errors = {},
  id,
  inputCls = "checkbox",
  label,
  labelCls,
  labelSizeCls,
  labelColorCls,
  labelUppercaseCls,
  labelWeightCls = "font-bold",
  name,
  readOnly,
  required = false,
  value = "",
  wrapperCls,
  wrapperGap = "gap-4",
  wrapperLayoutOpts = "items-center justify-center",
}: CheckboxProps) {
  const computedLayout = dir === "row" ? "flex flex-row" : "flex flex-col";
  return (
    <div
      className={cn(
        wrapperCls,
        computedLayout,
        wrapperGap,
        labelWeightCls,
        wrapperLayoutOpts,
      )}
    >
      <label
        htmlFor={id}
        className={cn(
          labelCls,
          labelWeightCls,
          labelSizeCls,
          labelColorCls,
          labelUppercaseCls,
        )}
      >
        {required && "*"} {label}
      </label>

      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        className={cn(inputCls)}
        required={required}
        readOnly={readOnly}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColorCls, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
