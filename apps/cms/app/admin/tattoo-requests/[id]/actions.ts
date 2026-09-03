"use server";
import { z } from "zod";

import { revalidatePath } from "next/cache";

import { createClientPerson } from "@hyperinkstudio/api";
//
import { createClientTattoo } from "@/business/clientTattoo";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import { type ClientTattoo } from "@/business/types";
import { TATT_REQ_ADMIN_EDITABLE_LIST } from "@/business/tattooRequest";

import { type TattReqEditable } from "@/business/tattooRequest";
//
import { createSSClient } from "@/auth/server";
//
import { getUserData } from "@/app/admin/getUserData";

type TattReqEditableAction = TattReqEditable & {
  flash_id?: string;
  flash_name?: string;
};

type TattReqForm = Partial<TattReqEditableAction> & {
  existingClient: string;
  client_id?: string;
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

  const { pvtProfileId: userId } = await getUserData();

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
  const parsedFormData = parsedReq.data as Partial<TattReqEditableAction>;

  const { email, phone, ...tattooData } = parsedFormData;

  const client = await createSSClient();

  const client_id = formDataObject.client_id
    ? (formDataObject.client_id as string)
    : null;

  let localClientId = client_id;

  if (client_id === null) {
    const { error, data } = await createClientPerson(
      client,
      {
        email: email,
        phone: phone,
      },
      userId,
    );

    if (error) {
      console.error("not existing client function");
      console.error(error);
      actionResults.errors = {
        client_id: "Failed to update client.",
      };
      return actionResults;
    }

    localClientId = data.id;
  }

  if (localClientId === null) {
    actionResults.errors = { client_id: "client_id is null!" };
    return actionResults;
  }

  const { data, error } = await createClientTattoo(client, {
    client_id: localClientId,
    type: tattooData.type,
    flash_id: tattooData.flash_id ?? null,
    flash_name: tattooData.flash_name ?? null,
  });

  if (error) {
    console.error(error);
    actionResults.errors = { clientTatt: "error creating client tattll" };
    return actionResults;
  }

  const clientTattooData = data as TattReqForm | ClientTattoo | null;
  actionResults.tattooRequest = clientTattooData;

  return actionResults;
}
