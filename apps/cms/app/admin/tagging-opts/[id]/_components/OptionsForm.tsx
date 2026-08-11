"use client";

// React
import { useState } from "react";

// Hyper Ink
import {
  Form,
  Input,
  FormMetaErrors,
} from "@hyperinkstudio/ui-react-next/components";

// Local @/db
import { TAGGING_OPTS_DISPLAY_COLLECTION } from "@/db/api/profileTaggingOpts";

type TaggingOptsFormKey = keyof ProfileTaggingOptionsDisplay;

import { type ProfileTaggingOptionsDisplay } from "@/db/api/profileTaggingOpts";
// Local
import { OptionsChips } from "./OptionsChips";

type Props = {
  option: ProfileTaggingOptionsDisplay;
  paramId: TaggingOptsFormKey;
};

type Option = {
  name: TaggingOptsFormKey;
  selected: string;
  unselected: string[];
};

type OptionState = {
  option: Option;
  errors: null | Record<string, string>;
};

export function OptionsForm({ option, paramId }: Props) {
  const initialState: OptionState = {
    option: {
      name: paramId,
      selected: option[paramId].join(","),
      unselected: [],
    },
    errors: null,
  };
  const [optionState, setOption] = useState(initialState);

  function handleSelect(option: string, action: string) {
    const selected = optionState.option.selected.split(",");
    const unselected = [...optionState.option.unselected];

    if (action === "add") {
      // Add to selected
      if (!selected.includes(option)) {
        selected.push(option);
      }

      // Remove from unselected
      const index = unselected.indexOf(option);
      if (index !== -1) {
        unselected.splice(index, 1);
      }
    }

    if (action === "remove") {
      // Remove from selected
      const index = selected.indexOf(option);
      if (index !== -1) {
        selected.splice(index, 1);
      }

      // Add back to unselected
      if (!unselected.includes(option)) {
        unselected.push(option);
      }
    }
    setOption((prev) => ({
      ...prev,
      option: {
        ...prev.option,
        selected: selected.filter(Boolean).join(","),
        unselected,
      },
    }));
  }

  const [newOption, setNewOption] = useState("");

  const handleAddNewOption = () => {
    const value = newOption.trim();

    if (!value) return;

    setOption((prev) => ({
      ...prev,
      option: {
        ...prev.option,
        selected: prev.option.selected
          ? `${prev.option.selected},${value}`
          : value,
      },
    }));

    setNewOption("");
  };

  return (
    <Form
      className="flex flex-col gap-4"
      submitBtnColorCls="bg-secondary-100-900"
    >
      <div className="flex gap-2">
        <input
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          className="input"
        />

        <button
          type="button"
          className="btn bg-secondary-100-900 btn-sm"
          onClick={handleAddNewOption}
        >
          +
        </button>
      </div>

      <Input
        id={paramId}
        name={paramId}
        label={TAGGING_OPTS_DISPLAY_COLLECTION?.[paramId]?.label ?? ""}
        type="hidden"
      />
      <OptionsChips
        optionStr={optionState.option.selected}
        unselectedOptions={optionState.option.unselected}
        onSelect={(option, action) => handleSelect(option, action)}
      />
      {optionState.errors && <FormMetaErrors errors={optionState.errors} />}
    </Form>
  );
}
