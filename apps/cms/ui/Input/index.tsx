// React
import type { ComponentPropsWithoutRef } from "react";
// @ utils
import { cn } from "@hyperinkstudio/utils";
import { Input as InputUI } from "@hyperinkstudio/ui-react-next/components/Input";

type InputProps = ComponentPropsWithoutRef<typeof InputUI> & {
  backgroundColorCls?: string;
  borderCls?: string;
  inputCls?: string;
};

export function Input({
  children,
  backgroundColorCls = "bg-surface-100-900/70",
  borderCls = "border border-2 border-surface-200-800",
  inputCls,
  ...props
}: InputProps) {
  const computedInputCls = cn(backgroundColorCls + borderCls + inputCls);

  return (
    <InputUI inputCls={computedInputCls} {...props}>
      {children}
    </InputUI>
  );
}
