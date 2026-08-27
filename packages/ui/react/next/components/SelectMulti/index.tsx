"use client";

import { cn } from "@hyperinkstudio/utils/";
import { XIcon } from "lucide-react";
import React, { useRef, useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectMultiProps = {
  cls?: string;
  label?: string;
  options: SelectOption[];
  value?: string[];
  onChange?: (values: string[]) => void;
};

export function SelectMulti({
  cls,
  label,
  options,
  value = [],
  onChange,
}: SelectMultiProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function toggleOption(optionValue: string) {
    const next = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];

    onChange?.(next);
  }

  return (
    <div
      ref={wrapperRef}
      className={cn("relative", cls)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      {label && <label className="font-bold label">{label}</label>}

      <button
        type="button"
        className="select mt-1 w-full bg-surface-100-900/70 border-surface-200-800 border-3 p-2.5 rounded-sm  text-left input"
        onClick={() => setOpen((current) => !current)}
      >
        {value.length
          ? options
              .filter((option) => value.includes(option.value))
              .map((option) => option.label)
              .join(", ")
          : "Select..."}
      </button>

      {open && (
        <div className="absolute bottom-0 z-10 w-full p-4 border-2 rounded-sm bg-surface-100-900/95 border-surface-200-800 ">
          <button
            type="button"
            className="absolute right-2 top-2"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <XIcon className="w-6 h-6 xl:w-7 xl:h-7" />
          </button>
          <div className="flex flex-col gap-1">
            {options.map((option) => {
              const selected = value.includes(option.value);

              return (
                <label
                  key={option.value}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-1 p-1",
                    selected && "font-bold",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    className="checkbox"
                    onChange={() => toggleOption(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
