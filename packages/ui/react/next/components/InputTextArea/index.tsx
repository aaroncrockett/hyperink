import type { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/";


type TextAreaProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  wrapperCls?: string;
  wrapperMarginCls?: string;
  disabled?: boolean;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColorCls?: string;
  id: string;
  inputCls?: string;
  inputHeightCls?: string;
  inputUtilCls?: string;
  label: string;
  labelCls?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string;
  defaultValue?: string;
};

export function InputTextArea({
  wrapperCls,
  wrapperMarginCls = "m-0",
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColorCls = "text-error-500",
  id,
  inputCls = "h-20",
  inputHeightCls = "h-20",
  inputUtilCls = "input textarea ",
  label,
  labelCls = "label font-bold",
  name,
  readOnly = false,
  required = false,
  rows = 5,
  value,
  defaultValue,
}: TextAreaProps) {
  return (
    <div className={cn(wrapperMarginCls, wrapperCls)}>
      <label htmlFor={id} className={cn(labelCls)}>
        {required && "*"} {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        className={cn(inputCls, inputHeightCls, inputUtilCls)}
        disabled={disabled}
        readOnly={readOnly}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColorCls, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
