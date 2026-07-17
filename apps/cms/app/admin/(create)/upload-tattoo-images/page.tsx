"use client";
// React
import { useActionState, useState } from "react";
// Inktree
import { Form, Heading, Page } from "@inktree/ui-react/components/client";
// Local Parent(s)
import { FormContentGetClient } from "../(features)/FormContentGetClient/";
import type { LookupType } from "../(features)/FormContentGetClient/types";
// Local
import { getClient } from "./actions";

const initClientState = {
  client: null,
};

export default function UploadTattooImagePage() {
  const [clientState, clientAction] = useActionState(
    getClient,
    initClientState,
  );

  const [lookupType, setLookupType] = useState<LookupType>("email");

  return (
    <Page>
      <Heading text="Upload Images" as="h2" />

      <label className="lable">Lookup By</label>
      <select
        value={lookupType}
        onChange={(e) => setLookupType(e.target.value as LookupType)}
        className="select"
      >
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="preferredName">Preferred Name</option>
        <option value="tattooYear">Tattoo Year</option>
      </select>

      <Form action={async (formData: FormData) => await clientAction(formData)}>
        <FormContentGetClient lookupType={lookupType} />
      </Form>
      {clientState.client?.email ? "email" : "none"}
      {clientState.client?.phone ? "phone?" : "no phone bro"}

      {/* {clientByPhoneState.data && (
        <Form action={uploadAction}>
          <FormContent
            clientTattoos={clientState.data}
            isPending={uploadPending}
          />
        </Form>
      )} */}
    </Page>
  );
}
