"use client";
import { useState } from "react";
//
import { toaster } from "@/app/_components/Toaster";

export function OptionsChips({
  selected,
  unselected,
  onSelect,
}: {
  selected: string[];
  unselected: string[];
  onSelect: (option: string, action: "add" | "remove") => void;
}) {
  const [hasToasted, setHasToasted] = useState(false);

  const createToaster = () => {
    if (!hasToasted) {
      setHasToasted(true);

      toaster.create({
        title: "FYI!",
        description:
          "If you remove a tag, you will have the opportunity to replace it with existing tags. If there are no existing tags, the tag will be removed entirely.",
        closable: true,
        duration: 10000,
        type: "warning",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 pt-6 rounded bg-surface-200-800/30">
      <div className="space-y-2">
        <p className="text-lg font-bold">Selected:</p>
        {selected.length > 0 && (
          <div className="flex flex-row flex-wrap gap-4">
            {selected.map((option) => (
              <span
                key={option}
                className="font-bold cursor-pointer chip bg-secondary-200-800 hover:bg-surface-400-600 text-surface-950-50!"
                onClick={() => {
                  onSelect(option, "remove");
                  createToaster();
                }}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-bold">Unselected:</p>
        {unselected.length > 0 && (
          <div className="flex flex-row flex-wrap gap-4">
            {unselected.map((option) => (
              <span
                key={option}
                className="font-bold cursor-pointer chip bg-surface-900-100 hover:bg-secondary-400-600 text-surface-50!"
                onClick={() => {
                  onSelect(option, "add");
                }}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
