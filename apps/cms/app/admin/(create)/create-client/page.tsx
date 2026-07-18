"use client";

import { useActionState } from "react";
import { createClient } from "./actions";
import { Form } from "@inktree/ui-react/components/client";
import FormContentCreateClient from "./_components/FormContentCrdeateClient";

const initialState = {
  errors: {},
};

export default function CreateClientPage() {
  const [state, action] = useActionState(createClient, initialState);

  return (
    <Form action={action}>
      <FormContentCreateClient errors={state.errors} />
    </Form>
  );
}
