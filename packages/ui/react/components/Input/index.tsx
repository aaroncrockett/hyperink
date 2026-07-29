import { cn } from "@hyperinkstudio/utils/";

type InputProps = {
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
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
};

export function Input({
  className = "",
  disabled = false,
  errorCls = "",
  errors = {},
  errorTxtColor = "text-red-500",
  id,
  inputClass = "input ",
  label,
  labelClassName = "",
  name,
  readOnly,
  required = false,
  type = "text",
  value,
  defaultValue,
}: InputProps) {
  return (
    <div>
      {type !== "hidden" && (
        <label htmlFor={id} className={cn("label", labelClassName)}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        {...(value !== undefined ? { value } : {})}
        className={cn(inputClass, className)}
        disabled={disabled}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColor, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
