import { ButtonHTMLAttributes } from "react";
import { cn } from "@hyperinkstudio/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnColorCls?: string;
  btnUtilCls?: string;
};

export function Button({
  className,
  btnColorCls,
  btnUtilCls,
  ...props
}: ButtonProps) {
  const computedClassName = cn(
    btnColorCls ||
      "bg-secondary-500 dark:bg-secondary-200 text-surface-50 dark:text-surface-950",
    btnUtilCls || "btn",
    className,
  );

  return <button className={cn(computedClassName)} {...props} />;
}
