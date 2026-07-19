import { cn } from "@hyperinkstudio/utils/";

type CheckboxProps = {
  className?: string;
  errorClassName?: string;
  errors?: Record<string, string> | null;
  id: string;
  label: string;
  labelClassName?: string;
  layoutClassName?: string;
  name: string;
  value?: string;
};

export default function Checkbox({
  className = "",
  errorClassName = "",
  errors = {},
  id,
  label,
  labelClassName = "",
  layoutClassName = "flex flex-row gap-2 items-center ",
  name,
  value = "",
}: CheckboxProps) {
  return (
    <div className={cn(layoutClassName)}>
      <label htmlFor={id} className={cn("", labelClassName)}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        className={cn("checkbox", className)}
      />

      {errors[name] && (
        <span className={cn("text-red-500", errorClassName)}>
          {errors[name]}
        </span>
      )}
    </div>
  );
}
