"use server";
import { z } from "zod";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import { type TattooRequest, type ClientTattoo } from "@/business/types";
import {
  TATT_REQ_ADMIN_EDITABLE_LIST,
  TATT_REQ_ADMIN_EDITABLE,
} from "@/business/tattooRequest";
import { createClientPerson } from "@/business/clientPersons";
import { createClientTattoo } from "@/business/clientTattoo";

import { createSSClient } from "@/auth/server";

type TattooRequestForm = TattooRequest &
  Partial<typeof TATT_REQ_ADMIN_EDITABLE> & {
    existingClient: string;
    clientId?: string;
  };

export type TattooFormState = {
  tattooRequest: TattooRequestForm | ClientTattoo | null;
  errors: Record<string, string> | null;
};

export async function createAClientTattooFlow(
  prevState: TattooFormState,
  formData: FormData,
): Promise<TattooFormState> {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedReq = z
    .object({
      ...Object.fromEntries(
        TATT_REQ_ADMIN_EDITABLE_LIST.map(({ id, schema }) => [id, schema]),
      ),
    })
    .safeParse(formDataObject);

  console.log(parsedReq);

  const actionResults: TattooFormState = {
    tattooRequest: null,
    errors: null,
  };

  // if (!parsedReq.success) {
  //   console.log("success function")
  //   const { issues } = parsedReq.error;

  //   actionResults.errors = zodIssuesToErrors(issues);

  //   return actionResults;
  // }
  // const parsedFormData = parsedReq.data as Partial<TattooRequest>;

  // const ssClient = await createSSClient();

  // let clientId = formDataObject.clientId as string;

  // if (formDataObject.existingClient === "true") {
  //   console.log("existing client");
  // }

  // if (formDataObject.existingClient === "false" && clientId === "") {
  //   console.log("NOT existing client");
  //   const { error, data } = await createClientPerson(ssClient, {
  //     email: parsedFormData.email,
  //     phone: parsedFormData.phone,
  //   });

  //   clientId = data?.id ?? "";

  //   if (error) {
  //     console.error("not existing client function");
  //     console.error(error);
  //     actionResults.errors = {
  //       client_id: "Failed to update client.",
  //     };

  //     return actionResults;
  //   }
  // }

  // const { data, error } = await createClientTattoo(ssClient, {
  //   client_id: clientId,
  //   type: "cool tattoo TYPE",
  //   title: "Im going to name this something!",
  // });

  // if (error) {
  //   console.error("create client tattoo");
  //   console.error(error);

  //   actionResults.errors = {
  //     root: "Failed to create tattoo request.",
  //   } as TattooFormState["errors"];

  //   return actionResults;
  // }

  // actionResults.tattooRequest = data;

  return actionResults;
}
