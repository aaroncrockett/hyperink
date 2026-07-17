"use client";

import { useState, type ReactNode } from "react";

type Option<T extends string> = {
  label: string;
  value: T;
};

type SelectStateProps<T extends string> = {
  options: readonly Option<T>[];

  children: (props: { lookupType: T }) => ReactNode;
};

export default function SelectState<T extends string, TState>({
  options,

  children,
}: SelectStateProps<T>) {
  const [lookupType, setLookupType] = useState<T>(options[0].value);

  return (
    <>
      <label className="label">Lookup By</label>

      <select
        value={lookupType}
        onChange={(e) => setLookupType(e.target.value as T)}
        className="select"
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
    </>
  );
}
