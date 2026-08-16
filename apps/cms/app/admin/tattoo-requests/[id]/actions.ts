"use server";
import { type TattooRequest, type ClientTattoo } from "@/business/types";
import { TATT_REQ_FOLLOW_UP_FORM_SCHEMA } from "@/business/tattooRequest";
import { createClientPerson } from "@/business/clientPersons";
import { createClientTattoo } from "@/business/clientTattoo";
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import { createSSClient } from "@/auth/server";

type TattooRequestForm = TattooRequest &
  Partial<ClientTattoo> & {
    existingClient: string;
    clientId?: string;
  };

type TattooFormState = {
  tattooRequest: TattooRequestForm | ClientTattoo | null;
  errors: Partial<Record<keyof TattooRequestForm, string>> | null;
};

export async function createAClientTattooAndHandleClient(
  prevState: TattooFormState,
  formData: FormData,
): Promise<TattooFormState> {
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedForm = TATT_REQ_FOLLOW_UP_FORM_SCHEMA.safeParse(formDataObject);

  const actionResults: TattooFormState = {
    tattooRequest: null,
    errors: null,
  };

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }
  const parsedFormData = parsedForm.data as Partial<TattooRequest>;

  const ssClient = await createSSClient();

  let clientId = formDataObject.clientId as string;

  if (formDataObject.existingClient === "true") {
    console.log("existing client");
  }

  if (formDataObject.existingClient === "false" && clientId === "") {
    console.log("NOT existing client");
    const { error, data } = await createClientPerson(ssClient, {
      email: parsedFormData.email,
      phone: parsedFormData.phone,
    });

    clientId = data?.id ?? "";

    if (error) {
      console.error("not existing client function");
      console.error(error);
      actionResults.errors = {
        client_id: "Failed to update client.",
      };

      return actionResults;
    }
  }

  const { data, error } = await createClientTattoo(ssClient, {
    client_id: clientId,
    type: "cool tattoo TYPE",
    title: "Im going to name this something!",
  });

  if (error) {
    console.error("create client tattoo");
    console.error(error);

    actionResults.errors = {
      root: "Failed to create tattoo request.",
    } as TattooFormState["errors"];

    return actionResults;
  }

  actionResults.tattooRequest = data;

  return actionResults;
}
