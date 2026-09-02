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
import { TATT_REQ_ADMIN_EDITABLE_LIST } from "@/business/tattooRequest";
// Local
import { createAClientTattooFlow } from "../actions";
import { Button, Input } from "@/ui";

export function EditTattReqForm({
  tattRequest,
  existingClient,
  clientId,
}: {
  tattRequest: TattooRequest;
  existingClient: boolean;
  clientId?: string | null;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const initialState = {
    tattooRequest: null,
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
          key="existingClient"
          id="existingClient"
          name="existingClient"
          label="Existing Client"
          type="hidden"
          required={true}
          value={existingClient.toString()}
        />
        <Input
          key="clientId"
          id="clientId"
          name="clientId"
          label="Client Id"
          type="hidden"
          value={clientId ?? ""}
        />
        <Input
          key="flashId"
          id="flash_id"
          name="flash id"
          label="flash id"
          type="hidden"
          value={tattRequest.flash_id ?? ""}
        />
        {TATT_REQ_ADMIN_EDITABLE_LIST.map(({ id, label, ...field }) => {
          if (field.type === "checkbox") {
            return (
              <div key={id}>
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
