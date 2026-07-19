"use client";

import { useActionState } from "react";
import { createClient } from "./actions";
import { Form } from "@hyperinkstudio/ui-react/components/client";
import FormContentCreateClient from "./_components/FormContentCrdeateClient";

const initialState = {
  errors: {
    unauthorized: "",
    createPerson: "",
  },
  client: null,
};

export default function CreateClientPage() {
  const [state, action] = useActionState(createClient, initialState);

  return (
    <Form action={action}>
      <FormContentCreateClient errors={state.errors} />

      {state?.errors?.unauthorized && (
        <p className="text-red-500">{state.errors.unauthorized}</p>
      )}

      {state?.errors?.createPerson && (
        <p className="text-red-500">{state.errors.createPerson}</p>
      )}
    </Form>
  );
}
