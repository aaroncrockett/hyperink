import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils";
import { Select as SelectUI } from "@hyperinkstudio/ui-react-next/components/Select";
import { INPUT_DEFAULTS } from "../consts";

type SelectProps = ComponentPropsWithoutRef<typeof SelectUI> & {
  backgroundColorCls?: string;
  borderCls?: string;
  inputCls?: string;
  roundedCls?: string;
};

export function Select({
  backgroundColorCls = INPUT_DEFAULTS.backgroundColorCls,
  borderCls = INPUT_DEFAULTS.borderCls,
  inputCls = INPUT_DEFAULTS.inputCls,
  roundedCls = INPUT_DEFAULTS.roundedCls,

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
