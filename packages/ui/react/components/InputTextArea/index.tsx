import { cn } from "@hyperinkstudio/utils/";

type TextAreaProps = {
  className?: string;
  disabled?: boolean;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColor?: string;
  id: string;
  inputClass?: string;
  label: string;
  labelClassName?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string;
  defaultValue?: string;
};

export function InputTextArea({
  className = "",
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColor = "text-red-500",
  id,
  inputClass = "textarea h-20",
  label,
  labelClassName = "label font-bold",
  name,
  readOnly = false,
  required = false,
  rows = 5,
  value,
  defaultValue,
}: TextAreaProps) {
  return (
    <div className={cn("m-0", className)}>
      <label htmlFor={id} className={cn(labelClassName)}>
        {required && "*"} {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        className={cn(inputClass)}
        disabled={disabled}
        readOnly={readOnly}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColor, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
