import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils";
import { Select as SelectUI } from "@hyperinkstudio/ui-react-next/components/Select";

type SelectProps = ComponentPropsWithoutRef<typeof SelectUI> & {
  backgroundColorCls?: string;
  borderCls?: string;
  inputCls?: string;
  roundedCls?: string;
};

export function Select({
  backgroundColorCls = "bg-surface-100-900/70",
  borderCls = "border-3 border-surface-200-800",
  roundedCls = "rounded-sm",
  inputCls,
  ...props
}: SelectProps) {
  const computedInputCls = cn(
    backgroundColorCls,
    roundedCls,
    borderCls,
    inputCls,
  );

  return <SelectUI inputCls={computedInputCls} {...props} />;
}
