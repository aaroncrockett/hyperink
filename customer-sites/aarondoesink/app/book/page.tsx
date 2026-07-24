"use client";

import { useActionState } from "react";
import {
  Form,
  FormError,
  Input,
  Page,
  Heading,
} from "@hyperinkstudio/ui-react/components/client";

import {
  createTattooRequestAction,
  type TattRequestFormState,
} from "./actions";

import { TATTOO_REQUEST_FORM_LIST } from "@/db/tattooRequest";

const initialState: TattRequestFormState = {
  errors: null,
  tattooRequest: null,
};

export default function FormContentBook() {
  const [state, formAction] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />
      <Form action={formAction}>
        {TATTOO_REQUEST_FORM_LIST.map(
          ({ id, label, type, required, value }) => (
            <Input
              key={id}
              id={id}
              name={id}
              label={label}
              type={type}
              required={required}
              errors={state.errors}
              value={value}
            />
          ),
        )}

        {state.errors &&
          Object.entries(state.errors).map(([key, error]) => (
            <div key={key}>
              <div>{key}</div>
              <FormError error={error} />
            </div>
          ))}
      </Form>
    </Page>
  );
}
