"use client";

// React
import { useActionState } from "react";
// Local Parents
import {
  Form,
  Page,
  Heading,
} from "@hyperinkstudio/ui-react/components/client";
// Local
import { createClient } from "./actions";
import FormContentCreateClient from "./_components/FormContentCreateClient";

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
    <Page>
      <Heading text="Create A Client Record" as="h2" />
      <Form action={action}>
        <FormContentCreateClient errors={state.errors} />

        {state?.errors?.unauthorized && (
          <p className="text-red-500">{state.errors.unauthorized}</p>
        )}

        {state?.errors?.createPerson && (
          <p className="text-red-500">{state.errors.createPerson}</p>
        )}
      </Form>
    </Page>
  );
}
