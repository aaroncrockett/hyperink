"use client";

// React
import { useState, useActionState } from "react";

// Hyper Ink
import {
  Form,
  Input,
  FormMetaErrors,
} from "@hyperinkstudio/ui-react-next/components";

// Local @/db
import { TAGGING_OPTS_DISPLAY_COLLECTION } from "@/db/api/profileTaggingOpts";
import { type ProfileTaggingOptionsDisplay } from "@/db/api/profileTaggingOpts";

// Local
import { OptionsChips } from "./OptionsChips";
import { upsertOptionRecord } from "../actions";

type TaggingOptsFormKey = keyof ProfileTaggingOptionsDisplay;

type PageProps = {
  option: ProfileTaggingOptionsDisplay;
  paramId: TaggingOptsFormKey;
};

type OptionParts = {
  name: TaggingOptsFormKey;
  selected: string;
  unselected: string[];
};

type OptionState = {
  option: OptionParts;
};

type OptionActionState = {
  name: TaggingOptsFormKey;
  options: string;
  errors: null | Record<string, string>;
};

export function OptionsForm({ option, paramId }: PageProps) {
  const initialState: OptionState = {
    option: {
      name: paramId,
      selected: option[paramId].join(","),
      unselected: [],
    },
  };
  const [optionState, setOption] = useState(initialState);

  const initActionState: OptionActionState = {
    name: optionState.option.name,
    options: optionState.option.selected,
    errors: null,
  };

  const [actionState, formAction] = useActionState(
    upsertOptionRecord,
    initActionState,
  );

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
      className="flex flex-col gap-4 "
      submitBtnColorCls="preset-tonal-secondary btn"
      submitBtnCls="md:w-1/4 sm:w-1/2 h-full"
      action={formAction}
    >
      <div className="flex gap-2 ">
        <input type="hidden" name="name" value={paramId} />
        <input
          value={optionState.option.selected}
          readOnly
          name="options"
          className="input"
          type="hidden"
        />
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

      <OptionsChips
        optionStr={optionState.option.selected}
        unselectedOptions={optionState.option.unselected}
        onSelect={(option, action) => handleSelect(option, action)}
      />
      {actionState.errors && <FormMetaErrors errors={actionState.errors} />}
    </Form>
  );
}
