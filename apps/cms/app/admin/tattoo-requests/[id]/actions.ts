"use server";
import { z } from "zod";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import { type ClientTattoo } from "@/business/types";
import {
  TATT_REQ_ADMIN_EDITABLE_LIST,
  TATT_REQ_ADMIN_EDITABLE,
} from "@/business/tattooRequest";
import {
  editTattReqFlow,
  type TattReqFormEditable,
} from "@/business/tattooRequest";
// import { createClientPerson } from "@/business/clientPersons";

import { createSSClient } from "@/auth/server";

type TattReqForm = TattReqFormEditable &
  Partial<typeof TATT_REQ_ADMIN_EDITABLE> & {
    existingClient: string;
    clientId?: string;
  };

export type TattReqFormState = {
  tattooRequest: TattReqForm | ClientTattoo | null;
  errors: Record<string, string> | null;
};

export async function createAClientTattooFlow(
  prevState: TattReqFormState,
  formData: FormData,
): Promise<TattReqFormState> {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedReq = z
    .object({
      ...Object.fromEntries(
        TATT_REQ_ADMIN_EDITABLE_LIST.map(({ id, schema }) => [id, schema]),
      ),
    })
    .safeParse(formDataObject);

  const actionResults: TattReqFormState = {
    tattooRequest: null,
    errors: null,
  };

  if (!parsedReq.success) {
    console.log("success function");
    const { issues } = parsedReq.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }
  const parsedFormData = parsedReq.data as Partial<TattReqFormEditable>;

  const client = await createSSClient();

  const clientId = formDataObject.clientId
    ? (formDataObject.clientId as string)
    : null;

  const editTattReqResults = await editTattReqFlow(
    client,
    clientId,
    parsedFormData.email ?? "",
    parsedFormData.phone ?? "",
    parsedFormData.type ?? "",
  );

  if (editTattReqResults.tattooRequest !== null)
    actionResults.tattooRequest = editTattReqResults.tattooRequest;

  if (editTattReqResults.errors !== null)
    actionResults.errors = editTattReqResults.errors;

  // if (error) {
  //   console.error("create client tattoo");
  //   console.error(error);

  //   actionResults.errors = {
  //     root: "Failed to create tattoo request.",
  //   } as TattReqFormState["errors"];

  //   return actionResults;
  // }

  // actionResults.tattooRequest = data;

  return actionResults;
}
