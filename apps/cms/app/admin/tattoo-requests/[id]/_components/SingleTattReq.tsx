"use client";

// React
import { useActionState } from "react";

// Hyper Ink

import { Form, FormMetaErrors } from "@hyperinkstudio/ui-react-next/components";

// Local @/db
import { type TattooRequest } from "@/business/types";
import {
  TATT_REQ_ADMIN_LIST,
  CLIENT_TATT_ADMIN_LIST,
} from "@/business/tattooRequest";
// Local
import { createAClientTattooFlow } from "../actions";
import { Input } from "@/ui";

export function SingleTattReq({
  tattRequest,
  existingClient,
  client_id,
}: {
  tattRequest: TattooRequest;
  existingClient: boolean;
  client_id?: string | null;
}) {
  const initialState = {
    errors: null,
  };

  const [state, formAction, isPending] = useActionState(
    createAClientTattooFlow,
    initialState,
  );

  if (!tattRequest) return null;

  if (tattRequest.client_tattoo_id) {
    return (
      <>
        {CLIENT_TATT_ADMIN_LIST.map(({ id, label }) => {
          return (
            <div className="flex flex-row gap-2" key={id}>
              <span>{label}</span>
              <span>{tattRequest[id]}</span>
            </div>
          );
        })}
        {TATT_REQ_ADMIN_LIST.map(({ id, label }) => {
          return (
            <>
              <div className="flex flex-row gap-2" key={id}>
                <span>{label}</span>
                <span>{tattRequest[id]}</span>
              </div>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <Form
        action={formAction}
        submitText={existingClient ? "create tatt" : "create tatt & client"}
        className="flex flex-col gap-4"
      >
        <div className="absolute hidden">
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
            wrapperCls="absolute -z-50 h-0 w-0 hidden"
            value={tattRequest.flash_id ?? ""}
          />
          <Input
            id="flash_name"
            name="flash_name"
            type="hidden"
            wrapperCls="absolute -z-50 h-0 w-0 hidden"
            value={tattRequest.flash_name ?? ""}
          />
          <Input
            id="tatt_req_id"
            name="tatt_req_id"
            type="hidden"
            wrapperCls="absolute -z-50 h-0 w-0 hidden"
            value={tattRequest.id ?? ""}
          />
          <Input
            id="client_tattoo_id"
            name="client_tattoo_id"
            type="hidden"
            wrapperCls="absolute -z-50 h-0 w-0 hidden"
            value={tattRequest.client_tattoo_id ?? ""}
          />
        </div>
        {CLIENT_TATT_ADMIN_LIST.map(({ id, label, ...field }) => {
          return (
            <div key={id}>
              {id === "title" && (
                <Input
                  id={id}
                  name={id}
                  label={label}
                  type={field.type}
                  required={field.required}
                  inputCls="input"
                  defaultValue={tattRequest.flash_name ?? ""}
                />
              )}
              <div className="absolute -z-50 h-0 w-0 ">
                <Input
                  defaultValue={(tattRequest[id] as string) ?? ""}
                  id={id}
                  name={id}
                  type="hidden"
                />
                {id}
              </div>
            </div>
          );
        })}
        {TATT_REQ_ADMIN_LIST.map(({ id, label }) => {
          return (
            <div className="flex flex-row gap-2" key={id}>
              <span>{label}</span>
              <span>{tattRequest[id]}</span>
              {id}
              <div className="absolute -z-50 h-0 w-0 hidden">
                <Input
                  defaultValue={(tattRequest[id] as string) ?? ""}
                  id={id}
                  name={id}
                  type="hidden"
                />
              </div>
            </div>
          );
        })}

        {isPending && <p>request pending</p>}
        {state.errors && <FormMetaErrors errors={state.errors} />}
      </Form>
    </>
  );
}
