"use client";

// React
import { useActionState } from "react";
// Local Outter
import {
  Form,
  Page,
  Heading,
  FormError,
} from "@hyperinkstudio/ui-react-next/components";

// Local
import { createClient } from "./actions";
import { FormContentCreateClient } from "./_components/FormContentCreateClient";
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { PageAdminNav } from "../../_components/PageAdminNav";

const initialState = {
  errors: null,
  client: null,
};

export default function CreateClientPage() {
  const [clientState, actionState] = useActionState(createClient, initialState);

  return (
    <Page>
      <Heading text="Create A Client Record" as="h1" />

      <PageAdminNav links={NAV_ADMIN_CLIENT_LIST} />

      <Form className="max-w-md" action={actionState}>
        <FormContentCreateClient errors={clientState.errors} />

        {clientState?.errors?.unauthorized && (
          <FormError error={clientState?.errors.unauthorized} />
        )}

        {clientState?.errors?.createPerson && (
          <FormError error={clientState.errors.createPerson} />
        )}
      </Form>
    </Page>
  );
}
