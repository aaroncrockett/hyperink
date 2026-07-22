"use client";

// React
import { useActionState } from "react";
// Local Outter
import {
  Form,
  Page,
  Heading,
} from "@hyperinkstudio/ui-react/components/client";

// Local
import { createClient } from "./actions";
import { FormContentCreateClient } from "./_components/FormContentCreateClient";
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { Nav } from "../../_components/Nav";

const initialState = {
  errors: {
    unauthorized: "",
    createPerson: "",
  },
  client: null,
};

export default function CreateClientPage() {
  const [clientState, actionState] = useActionState(createClient, initialState);

  return (
    <Page>
      <Heading text="Create A Client Record" as="h1" />
      <div className="flex gap-3">
        <Nav links={NAV_ADMIN_CLIENT_LIST} />
      </div>
      <Form className="max-w-md" action={actionState}>
        <FormContentCreateClient errors={clientState.errors} />

        {clientState?.errors?.unauthorized && (
          <p className="text-red-500">{clientState.errors.unauthorized}</p>
        )}

        {clientState?.errors?.createPerson && (
          <p className="text-red-500">{clientState.errors.createPerson}</p>
        )}
      </Form>
    </Page>
  );
}
