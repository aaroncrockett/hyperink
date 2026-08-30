// React
import type { ComponentPropsWithoutRef } from "react";
// @ utils
import { cn } from "@hyperinkstudio/utils";
import { Input as InputUI } from "@hyperinkstudio/ui-react-next/components/Input";
// Local
import { INPUT_DEFAULTS } from "../consts";

type InputProps = ComponentPropsWithoutRef<typeof InputUI> & {
  backgroundColorCls?: string;
  borderCls?: string;
  inputCls?: string;
  roundedCls?: string;
};

export function Input({
  children,
  backgroundColorCls = INPUT_DEFAULTS.backgroundColorCls,
  borderCls = INPUT_DEFAULTS.borderCls,
  inputCls = INPUT_DEFAULTS.inputCls,
  roundedCls = INPUT_DEFAULTS.roundedCls,

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
