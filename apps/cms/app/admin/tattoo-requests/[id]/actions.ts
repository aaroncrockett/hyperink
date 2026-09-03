"use server";
import { z } from "zod";

import { createClientPerson } from "@hyperinkstudio/api";
//
import { createClientTattoo } from "@/business/clientTattoo";
import { updateTattooRequest } from "@/business/tattooRequest";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import { type ClientTattoo, type ClientAsClientPerson } from "@/business/types";
import {
  TATT_REQ_ADMIN_EDITABLE_LIST,
  CLIENT_TATT_ADMIN_EDITABLE_LIST,
} from "@/business/tattooRequest";

import {
  type TattReqEditable,
  type ClientTattEditable,
} from "@/business/tattooRequest";
//
import { createSSClient } from "@/auth/server";
//
import { getUserData } from "@/app/admin/getUserData";

// values
type TattReqEditableAction = TattReqEditable & ClientTattEditable;
type TattReqImmutable = {
  existingClient: string;
  client_id?: string;
  tatt_req_id: string;
  client_tattoo_id: string;
  flash_id?: string;
  flash_name?: string;
};

type TattReqForm = Partial<TattReqEditableAction> & TattReqImmutable;

type TattReqUnions = TattReqForm | ClientTattoo | ClientAsClientPerson | null;

export type TattReqFormState = {
  tattooRequest: TattReqUnions;
  errors: Record<string, string> | null;
};

export async function createAClientTattooFlow(
  prevState: TattReqFormState,
  formData: FormData,
): Promise<TattReqFormState> {
  const formDataObject = Object.fromEntries(formData.entries());

  const { pvtProfileId: userId } = await getUserData();

  const actionResults: TattReqFormState = {
    tattooRequest: null,
    errors: null,
  };

  const combinedList = [
    ...TATT_REQ_ADMIN_EDITABLE_LIST,
    ...CLIENT_TATT_ADMIN_EDITABLE_LIST,
  ];

  const parsedForm = z
    .object(
      Object.fromEntries(combinedList.map(({ id, schema }) => [id, schema])),
    )
    .safeParse(formDataObject);

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }
  const parsedFormData = parsedForm.data as Partial<TattReqForm>;

  const { email, phone, ...tattooFormData } = parsedFormData;

  const clientPersonFormData = {
    email: email,
    phone: phone,
  };

  console.log(parsedFormData);

  const client = await createSSClient();

  const client_id = formDataObject.client_id
    ? (formDataObject.client_id as string)
    : null;

  const tatt_req_id = formDataObject.tatt_req_id
    ? (formDataObject.client_id as string)
    : null;

  const client_tattoo_id = formDataObject.client_tattoo_id
    ? (formDataObject.client_id as string)
    : null;

  let localClientId = client_id;

  if (client_id === null) {
    const { error, data } = await createClientPerson(
      client,
      {
        ...clientPersonFormData,
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

  if (client_tattoo_id === null) {
    const { data, error } = await createClientTattoo(
      client,
      {
        client_id: localClientId,
        title: tattooFormData.title,
        type: tattooFormData.type,
        flash_id: tattooFormData.flash_id ?? null,
        flash_name: tattooFormData.flash_name ?? null,
      },
      true,
    );

    if (error) {
      console.error(error);
      actionResults.errors = {
        clientTatt: "error creating a client tattoo",
      };
      return actionResults;
    }

    const clientTattooData = data as ClientTattoo | null;

    if (
      clientTattooData &&
      "client_id" in clientTattooData &&
      "id" in clientTattooData
    ) {
      const { data: updatedTattReq, error } = await updateTattooRequest(
        client,
        {
          client_tattoo_id,
          ...clientPersonFormData,
          ...tattooFormData,
        },
        [{ field: "id", value: tatt_req_id }],
        { returnType: "single" },
      );

      if (error) {
        console.error(error);
        actionResults.errors = {
          clientTatt: "error udpating the tattoo request with client_tattoo_id",
        };
        return actionResults;
      }

      actionResults.tattooRequest = updatedTattReq as TattReqUnions;

      return actionResults;
    }
  }

  const { data: updatedTattReq, error } = await updateTattooRequest(
    client,
    { ...clientPersonFormData, ...tattooFormData },
    [{ field: "id", value: tatt_req_id }],
    { returnType: "single" },
  );

  if (error) {
    console.error(error);
    actionResults.errors = {
      clientTatt: "error udpating the tattoo request",
    };
    return actionResults;
  }

  actionResults.tattooRequest = updatedTattReq as TattReqUnions;

  return actionResults;
}
