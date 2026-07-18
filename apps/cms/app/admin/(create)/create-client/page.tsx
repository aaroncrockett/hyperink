"use client";

import { useActionState } from "react";
import { createClient } from "./actions";
import { Form } from "@inktree/ui-react/components/client";
import FormContentCreateClient from "./_components/FormContentCrdeateClient";

const initialState = {
  errors: {
    unauthorized: "",
    createPerson: "",
  },
  client: {},
};

export default function CreateClientPage() {
  const [state, action] = useActionState(createClient, initialState);

  return (
    <Form action={action}>
      <FormContentCreateClient errors={state.errors} />

      {state.errors.unauthorized && (
        <p className="text-red-500">{state.errors.unauthorized}</p>
      )}

      {state.errors.createPerson && (
        <p className="text-red-500">{state.errors.createPerson}</p>
      )}
      {Object.entries(state.errors).map(([key, error]) => {
        if (!error) return null;

        return (
          <p key={key} className="text-red-500">
            {key}: {error}
          </p>
        );
      })}
    </Form>
  );
}
