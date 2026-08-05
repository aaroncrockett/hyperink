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
  headerBgCls = "bg-surface-300-700",
  headerCls,
  headerCols,
  paddingCls = "p-2",
}: RowsProps) {
  return (
    <>
      <div
        className={cn(
          "grid",
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
    </>
  );
}
