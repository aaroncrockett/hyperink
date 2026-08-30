"use client";

// React
import { useState, useActionState } from "react";

// Hyper Ink
import { Form, FormMetaErrors } from "@hyperinkstudio/ui-react-next/components";
import { capitalizeWords } from "@hyperinkstudio/utils";
// Local @/db
import { type ProfileTaggingOptionsDisplay } from "@/business/profileTaggingOpts";
// Local @/ui
import { Button, Input } from "@/ui";

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

    const formattedValue = capitalizeWords(value);

    setOption((prev) => ({
      ...prev,
      option: {
        ...prev.option,
        selected: prev.option.selected
          ? `${prev.option.selected},${formattedValue}`
          : formattedValue,
      },
    }));

    setNewOption("");
  };

  return (
    <Form
      className="flex flex-col gap-4 "
      submitBtnWrapperCls="w-1/3"
      submitBtnCls="w-full flex"
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
        <div className="w-full flex flex-row gap-2">
          <div className="flex-1 sm:flex-none sm:w-2/3 md:w-1/2">
            <Input
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              inputCls="bg-surface-100-900/70 border border-2 border-surface-200-800 p-2"
            />
          </div>
          <Button
            type="button"
            className="font-bold btn btn-sm text-lg!"
            onClick={handleAddNewOption}
          >
            +
          </Button>
        </div>
      </div>
      <p>Tap or Click to add and remove items.</p>
      <OptionsChips
        optionStr={optionState.option.selected}
        unselectedOptions={optionState.option.unselected}
        onSelect={(option, action) => handleSelect(option, action)}
      />
      {actionState.errors && <FormMetaErrors errors={actionState.errors} />}
    </Form>
  );
}
