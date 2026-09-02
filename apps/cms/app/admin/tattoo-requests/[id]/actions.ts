"use server";
import { z } from "zod";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import { type ClientTattoo } from "@/business/types";
import { TATT_REQ_ADMIN_EDITABLE_LIST } from "@/business/tattooRequest";

import {
  editTattReqFlow,
  type TattReqEditable,
} from "@/business/tattooRequest";
//
import { createSSClient } from "@/auth/server";
//
import { getUserData } from "@/app/admin/getUserData";

type TattReqForm = TattReqEditable &
  Partial<TattReqEditable> & {
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

  const { pvtProfileId } = await getUserData();

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
  const parsedFormData = parsedReq.data as Partial<TattReqEditable>;

  const { email, phone, ...tattooData } = parsedFormData;

  const client = await createSSClient();

  const clientId = formDataObject.clientId
    ? (formDataObject.clientId as string)
    : null;

  const editTattReqResults = await editTattReqFlow(
    client,
    clientId,
    pvtProfileId,
    tattooData as ClientTattoo,
    phone ?? "",
    email ?? "",
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
