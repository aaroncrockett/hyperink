import { cn } from "@hyperinkstudio/utils/";

type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  errors?: Record<string, string> | null;
  className?: string;
  labelClassName?: string;
  errorCls?: string;
  errorTxtColor?: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  errors = {},
  className = "",
  labelClassName = "",
  errorCls = "",
  errorTxtColor = "text-red-500",
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className={cn("input", className)}
      />

      {errors && errors[name] && (
        <p className={cn(errorTxtColor, errorCls)}>{errors[name]}</p>
      )}
    </div>
  );
}
