import { cn } from "@hyperinkstudio/utils/";

type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  errors?: Record<string, string> | null;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  errors = {},
  className = "",
  labelClassName = "",
  errorClassName = "",
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

      {errors[name] && (
        <span className={cn("text-red-500", errorClassName)}>
          {errors[name]}
        </span>
      )}
    </div>
  );
}
