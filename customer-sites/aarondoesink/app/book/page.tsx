"use client";

import { useActionState } from "react";
import {
  Form,
  FormMetaErrors,
  Input,
  Page,
  Heading,
} from "@hyperinkstudio/ui-react/components/client";

import {
  createTattooRequestAction,
  type TattRequestFormState,
} from "./actions";

import {
  TATTOO_REQUEST_FORM_LIST,
  TATTOO_REQUEST_FORM_KEYS,
} from "@/db/tattooRequest";

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
      <Form className=" max-w-md" action={formAction}>
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

        {state.errors && (
          <FormMetaErrors
            errors={state.errors}
            excludeKeys={TATTOO_REQUEST_FORM_KEYS}
          />
        )}
      </Form>
    </Page>
  );
}
