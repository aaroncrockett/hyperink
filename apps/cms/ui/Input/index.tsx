// React
import type { ComponentPropsWithoutRef } from "react";
// @ utils
import { cn } from "@hyperinkstudio/utils";
import { Input as InputUI } from "@hyperinkstudio/ui-react-next/components/Input";

type InputProps = ComponentPropsWithoutRef<typeof InputUI> & {
  backgroundColorCls?: string;
  borderCls?: string;
  inputCls?: string;
  roundedCls?: string;
};

export function Input({
  children,
  backgroundColorCls = "bg-surface-100-900/70 ",
  borderCls = "border-3 border-surface-200-800",
  inputCls,
  roundedCls = "rounded-sm",
  ...props
}: InputProps) {
  const computedInputCls = cn(
    backgroundColorCls,
    borderCls,
    inputCls,
    roundedCls,
  );

  return (
    <InputUI inputCls={computedInputCls} {...props}>
      {children}
    </InputUI>
  );
}
