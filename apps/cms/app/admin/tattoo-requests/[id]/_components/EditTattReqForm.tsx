"use client";

// React
import { useActionState, useState } from "react";

// Hyper Ink

import {
  Form,
  FormMetaErrors,
  InputCheck,
} from "@hyperinkstudio/ui-react-next/components";

// Local @/db
import { type TattooRequest } from "@/business/types";
import {
  TATT_REQ_ADMIN_EDITABLE_LIST,
  CLIENT_TATT_ADMIN_EDITABLE_LIST,
} from "@/business/tattooRequest";
// Local
import { createAClientTattooFlow } from "../actions";
import { Button, Input } from "@/ui";

export function EditTattReqForm({
  tattRequest,
  existingClient,
  client_id,
}: {
  tattRequest: TattooRequest;
  existingClient: boolean;
  client_id?: string | null;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const initialState = {
    errors: null,
  };

  const [state, formAction, isPending] = useActionState(
    createAClientTattooFlow,
    initialState,
  );

  if (!tattRequest) return null;

  return (
    <>
      <Button onClick={() => setIsEditing((isPrev) => !isPrev)}>
        Edit Request
      </Button>
      <Form
        action={formAction}
        submitText={existingClient ? "create tatt" : "create tatt & client"}
        className="flex flex-col gap-4"
      >
        <Input
          id="existingClient"
          name="existingClient"
          label="Existing Client"
          type="hidden"
          required={true}
          value={existingClient.toString()}
        />
        <Input
          id="client_id"
          name="client_id"
          label="Client Id"
          type="hidden"
          value={client_id ?? ""}
        />
        <Input
          id="flash_id"
          name="flash_id"
          type="hidden"
          value={tattRequest.flash_id ?? ""}
        />
        <Input
          id="flash_name"
          name="flash_name"
          type="hidden"
          value={tattRequest.flash_name ?? ""}
        />
        <Input
          id="tatt_req_id"
          name="tatt_req_id"
          type="hidden"
          value={tattRequest.id ?? ""}
        />

        <Input
          id="client_tattoo_id"
          name="client_tattoo_id"
          label="client_tattoo_id"
          type="hidden"
          value={tattRequest.client_tattoo_id ?? ""}
        />
        {CLIENT_TATT_ADMIN_EDITABLE_LIST.map(({ id, label, ...field }, i) => {
          return (
            <div key={id + i}>
              <Input
                id={id}
                name={id}
                label={label}
                type={field.type}
                required={field.required}
                inputCls="input"
                defaultValue={tattRequest.flash_name ?? ""}
              />
              {id}
            </div>
          );
        })}
        {TATT_REQ_ADMIN_EDITABLE_LIST.map(({ id, label, ...field }, i) => {
          if (field.type === "checkbox") {
            return (
              <div key={id + i}>
                <InputCheck id={id} name={id} label={label} />
              </div>
            );
          }

          return (
            <div key={id}>
              <Input
                id={id}
                name={id}
                label={label}
                type={field.type}
                required={field.required}
                inputCls={isEditing ? "input" : ""}
                defaultValue={(tattRequest[id] as string) ?? ""}
                readOnly={!isEditing}
              />
            </div>
          );
        })}

        {isPending && <p>request pending</p>}
        {state.errors && <FormMetaErrors errors={state.errors} />}
      </Form>
    </>
  );
}
