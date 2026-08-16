import { ComponentPropsWithoutRef } from "react";
import React from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/cn";

type RowsProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  children: React.ReactNode;
  cls?: string;
  gridColCls: string;
  gridOptsCls?: string;
  headerBgCls?: string;
  headerCls?: string;
  headerCols: React.ReactNode;
  paddingCls?: string;
};

export function TableLayout({
  children,
  cls,
  gridColCls,
  gridOptsCls,
  headerBgCls = "bg-surface-200-800/70",
  headerCls,
  headerCols,
  paddingCls = "p-2 md:p-3",
}: RowsProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className={cn(
          "grid min-w-max",
          cls,
          gridColCls,
          gridOptsCls,
          headerCls,
          headerBgCls,
          paddingCls,
        )}
      >
        {headerCols}
      </div>

      {children}
    </div>
  );
}
