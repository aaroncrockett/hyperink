"use server";
import { z } from "zod";
//
import { redirect } from "next/navigation";

import { createClientPerson } from "@hyperinkstudio/api";
//
import { createClientTattoo } from "@/business/clientTattoo";
import { updateTattooRequest } from "@/business/tattooRequest";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
//
import type { ClientTattoo } from "@/business/types";
import {
  TATT_REQ_ADMIN_LIST,
  CLIENT_TATT_ADMIN_LIST,
} from "@/business/tattooRequest";

import {
  type TattReqEditable,
  type ClientTattEditable,
} from "@/business/tattooRequest";
//
import { createSSClient } from "@/auth/server";
//
import { getUserData } from "@/app/getUserData";

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

// type TattReqUnions = TattReqForm | ClientTattoo | ClientAsClientPerson | null;

export type TattReqReturns = {
  errors: Record<string, string> | null;
};

export async function createAClientTattooFlow(
  prevState: TattReqReturns,
  formData: FormData,
): Promise<TattReqReturns> {
  const formDataObject = Object.fromEntries(formData.entries());

  const { pvtProfileId: userId } = await getUserData();

  const actionResults: TattReqReturns = {
    errors: null,
  };

  const combinedList = [...TATT_REQ_ADMIN_LIST, ...CLIENT_TATT_ADMIN_LIST];

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

  const { email, phone, preferred_name, title, ...reqForm } = parsedFormData;

  const clientPersonFormData = {
    email: email,
    phone: phone,
    preferred_name: preferred_name,
  };

  const clientTattooFormData = {
    title: title,
  };

  const client = await createSSClient();

  const client_id = formDataObject.client_id
    ? (formDataObject.client_id as string)
    : null;

  const tatt_req_id = formDataObject.tatt_req_id
    ? (formDataObject.tatt_req_id as string)
    : null;

  const client_tattoo_id = formDataObject.client_tattoo_id
    ? (formDataObject.client_tattoo_id as string)
    : null;

  let clientId = client_id;

  if (clientId === null) {
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

    clientId = data.id;
  }

  if (client_tattoo_id === null) {
    const { data, error } = await createClientTattoo(
      client,
      {
        client_id: clientId,
        title: clientTattooFormData.title,
        type: reqForm.type,
        flash_id: reqForm.flash_id ?? null,
        flash_name: reqForm.flash_name ?? null,
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
      const { error } = await updateTattooRequest(
        client,
        {
          client_tattoo_id: clientTattooData.id,
          ...clientPersonFormData,
          ...clientTattooFormData,
        },
        [{ field: "id", value: tatt_req_id }],
        { returnType: "single" },
      );

      console.log({
        client_tattoo_id: clientTattooData.id,
        ...clientPersonFormData,
        ...clientTattooFormData,
      });

      if (error) {
        console.error(error);
        actionResults.errors = {
          clientTatt: "error udpating the tattoo request with client_tattoo_id",
        };
        return actionResults;
      }

      redirect(`/admin/tattoo-requests/${tatt_req_id}/success`);
    }
  }
  console.error(
    "should not be able to edit tatt req if there is a a client_tattoo_id",
  );
  actionResults.errors = { logicError: "error. hyperink" };
  return actionResults;
}
