import { cn } from "@hyperinkstudio/utils/";

type InputProps = {
  className?: string;
  errorCls?: string;
  errors?: Record<string, string> | null;
  errorTxtColor?: string;
  id: string;
  label: string;
  labelClassName?: string;
  name: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
};

export function Input({
  className = "",
  errorCls = "",
  errors = {},
  errorTxtColor = "text-red-500",
  id,
  label,
  labelClassName = "",
  name,
  required = false,
  type = "text",
  value,
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
        className={cn("input", className)}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColor, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
