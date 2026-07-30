import { cn } from "@hyperinkstudio/utils/";

type CheckboxProps = {
  className?: string;
  errorClassName?: string;
  errors?: Record<string, string> | null;
  id: string;
  label: string;
  labelClassName?: string;
  inputClass?: string;
  value?: string;
  name: string;
  required?: boolean;
};

export function InputCheck({
  errorClassName = "",
  errors = {},
  id,
  label,
  labelClassName = "",
  className = "flex flex-row gap-2 items-center ",
  name,
  inputClass = "checkbox",
  value = "",
  required = false,
}: CheckboxProps) {
  return (
    <div className={cn(className)}>
      <label htmlFor={id} className={cn("", labelClassName)}>
        {required && "*"} {label}
      </label>

      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        className={cn(inputClass)}
        required={required}
      />

      {errors?.[name] && (
        <span className={cn("text-red-500", errorClassName)}>
          {errors[name]}
        </span>
      )}
    </div>
  );
}
