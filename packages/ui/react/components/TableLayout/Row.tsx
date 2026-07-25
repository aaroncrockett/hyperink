import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils/cn";

type RowType = ComponentPropsWithoutRef<"div"> & {
  gridCls?: string;
  key?: string;
};

export function Row({
  children,
  className = "odd:bg-surface-100-900/70 p-2",
  gridCls,
  key,
  ...props
}: RowType) {
  return (
    <div key={key} className={cn(gridCls, className)} {...props}>
      {children}
    </div>
  );
}
