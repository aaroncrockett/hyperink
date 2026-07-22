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
// Local
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { PageAdminNavs } from "../../_components/PageAdminNavs";

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
        {NAV_ADMIN_CLIENT_LIST.map((link) => {
          return <PageAdminNavs key={link.href} link={link} />;
        })}
      </div>
      <Form action={actionState}>
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
