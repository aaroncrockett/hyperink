"use client";

import { useActionState, useState } from "react";
import { Form, Heading, Page } from "@inktree/ui-react/components";

import type { LookupType } from "../types";

// import FormContent from "./FormContentWrapper";
import { getClient } from "./actions";
import { GetClientFormContent } from "../GetClientFormContent";
const initClientState = {
  client: null,
};

export default function UploadImagePage() {
  const [clientState, clientAction, clientPending] = useActionState(
    getClient,
    initClientState,
  );

  // const [uploadState, uploadAction, uploadPending] = useActionState(
  //   uploadImage,
  //   initialState,
  // );

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

      <Form action={clientAction}>
        <GetClientFormContent lookupType={lookupType} />
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
