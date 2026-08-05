"use client";

import { cn } from "@hyperinkstudio/utils/";

import { useState, type ReactNode } from "react";

type Option<T extends string> = {
  label: string;
  value: T;
};

type SelectStateProps<T extends string> = {
  children: (props: { lookupType: T }) => ReactNode;
  optCls?: string;
  options: readonly Option<T>[];
  selectCls?: string;
  selectUtilCls?: string;
  wrapperCls?: string;
};

export function SelectState<T extends string, TState>({
  children,
  optCls,
  options,
  selectCls,
  selectUtilCls = "select",
  wrapperCls,
}: SelectStateProps<T>) {
  const [lookupType, setLookupType] = useState<T>(options[0].value);

  return (
    <div className={wrapperCls}>
      <label className="label">Lookup By</label>

      <select
        value={lookupType}
        onChange={(e) => setLookupType(e.target.value as T)}
        className={cn(selectUtilCls, selectCls)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {children({
        lookupType,
      })}
    </div>
  );
}
