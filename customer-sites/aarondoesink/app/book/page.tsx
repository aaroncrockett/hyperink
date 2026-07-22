"use client";

import { useActionState } from "react";
import { Form, Input } from "@hyperinkstudio/ui-react/components/client";

import { createTattooRequestAction, type TattRequestFormState } from "./action";

import { EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL_LIST } from "@/db/tattooRequest";

const initialState: TattRequestFormState = {
  errors: null,
  request: null,
  artist_id: "",
};

export default function FormContentBook() {
  const [state, formAction] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  return (
    <Form action={formAction}>
      <input type="hidden" name="artist_id" value="shadetoshadetattoo" />

      {EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL_LIST.map(
        ({ value, label, type }) => (
          <Input
            key={value}
            id={value}
            name={value}
            label={label}
            type={type}
            errors={state.errors}
          />
        ),
      )}
    </Form>
  );
}
