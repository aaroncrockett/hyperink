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

import { TATTOO_REQUEST_DATA_LIST } from "@/db/tattooRequest";

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
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />
      <Form action={formAction}>
        <input type="hidden" name="artist_id" id="shadetoshadetattoo" />

        {TATTOO_REQUEST_DATA_LIST.map(({ id, label, type }) => (
          <Input
            key={id}
            id={id}
            name={id}
            label={label}
            type={type}
            errors={state.errors}
          />
        ))}
        <FormError error={state.errors?.noArttist} />
        <FormError error={state.errors?.database} />
      </Form>
    </Page>
  );
}
