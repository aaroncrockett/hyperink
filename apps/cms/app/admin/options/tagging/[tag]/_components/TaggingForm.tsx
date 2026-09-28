"use client";
//
import { useState, useActionState } from "react";
//
import {
  FormClient as Form,
  ErrorDisplay,
} from "@hyperink/ui-react/components";
//
import { type HIError } from "@hyperink/api-domain-helpers";
//
import { Input } from "@hyperink/ui-react/components";
//
import { OptionsChips } from "./TaggingChips";
import { upsertTagOpts } from "../actions";
import { handleSelect, handleAddNewOption } from "./helpers";

type PageProps = {
  options: string[];
  type: string;
  profileId: string;
};

export type OptionState = {
  name: string;
  selected: string[];
  unselected: string[];
};

type OptionActionState = {
  error: null | HIError;
};

export function TaggingForm({ options, type, profileId }: PageProps) {
  const initialState: OptionState = {
    name: type,
    selected: options,
    unselected: [],
  };
  const [optionState, setOption] = useState(initialState);

  const initActionState: OptionActionState = {
    error: null,
  };

  const [actionState, formAction] = useActionState(
    upsertTagOpts,
    initActionState,
  );

  const [newOption, setNewOption] = useState("");

  type SelectAction = "add" | "remove";

  function onSelect(option: string, action: SelectAction) {
    setOption((prev) => handleSelect(prev, option, action));
  }

  const onAddNewOption = () => {
    setOption((prev) => handleAddNewOption(prev, newOption));
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
        <input type="hidden" name="profile_id" value={profileId} />
        <input type="hidden" name="type" value={type} />
        <input
          value={optionState.selected.join("+")}
          readOnly
          name="selected"
          className="input"
          type="hidden"
        />
        <input
          value={optionState.unselected.join("+")}
          readOnly
          name="unselected"
          className="input"
          type="hidden"
        />
        <div className="w-full flex flex-row gap-2">
          <div className="flex-1 sm:flex-none sm:w-2/3 md:w-1/2">
            <Input
              value={newOption}
              onChange={(e) =>
                setNewOption((e.target as HTMLInputElement).value)
              }
            />
          </div>
          <button
            type="button"
            className="hI-btn hI-btn-primary"
            onClick={onAddNewOption}
          >
            +
          </button>
        </div>
      </div>
      <p>Tap or Click to add and remove items.</p>
      <OptionsChips
        selected={optionState.selected}
        unselected={optionState.unselected}
        onSelect={(option, action) => onSelect(option, action)}
      />
      {actionState.error && <ErrorDisplay error={actionState.error.message} />}
    </Form>
  );
}
