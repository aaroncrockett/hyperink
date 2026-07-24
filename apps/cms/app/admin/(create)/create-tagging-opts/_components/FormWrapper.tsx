"use client";

import { useActionState, useState } from "react";
// hyperink
import { Form } from "@hyperinkstudio/ui-react/components";
// local
import {
  EDITABLE_TAGGING_COLS_LIST_OF_OPTS,
  createTaggingValues,
} from "@/db/profileTaggingOpts";
import { upsertProfileTaggingOpts } from "../actions";
import FormContentAllTags from "./FormContentAllTags";
import type { ProfileTaggingOptions } from "@/db/types";

type FormWrapperProps = {
  data: Partial<ProfileTaggingOptions> | null;
};

const initialState = {
  opts: null,
  errors: null,
};

export default function FormWrapper({ data }: FormWrapperProps) {
  const [state, action] = useActionState(
    upsertProfileTaggingOpts,
    initialState,
  );

  const [values, setValues] = useState<Record<string, string[]>>(
    createTaggingValues(data),
  );

  const [inputs, setInputs] = useState<Record<string, string>>({
    tags: "",
    styles: "",
    collections: "",
  });

  function addItem(key: string) {
    const value = inputs[key].trim();

    if (!value) return;

    setValues((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));

    setInputs((prev) => ({
      ...prev,
      [key]: "",
    }));
  }

  function removeItem(key: string, item: string) {
    setValues((prev) => ({
      ...prev,
      [key]: prev[key].filter((value) => value !== item),
    }));
  }

  return (
    <Form action={action}>
      {EDITABLE_TAGGING_COLS_LIST_OF_OPTS.map(({ value, label }) => (
        <FormContentAllTags
          key={value}
          value={value}
          label={label}
          items={values[value]}
          input={inputs[value]}
          setInput={setInputs}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}

      {state.errors && (
        <p className="text-red-500">{JSON.stringify(state.errors)}</p>
      )}
    </Form>
  );
}
