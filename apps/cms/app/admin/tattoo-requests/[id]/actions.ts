"use server";
import { type TattooRequest, type ClientTattoo } from "@/db/types";
import { TATTOO_REQUEST_FORM_SCHEMA } from "@/db/tattooRequest";
import { updateClientPerson, createClientPerson } from "@/db/clientPersons";
import { createClientTattoo } from "@/db/clientTattoo";
import { zodIssuesToErrors } from "@/db/_helpers";
import { createSSClient } from "@/db/server";

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
  formValues: FormData,
): Promise<TattooFormState> {
  const formDataObject = Object.fromEntries(formValues.entries());

  const parsed = TATTOO_REQUEST_FORM_SCHEMA.safeParse(formDataObject);

  const actionResults: TattooFormState = {
    tattooRequest: null,
    errors: null,
  };

  if (!parsed.success) {
    const { issues } = parsed.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }
  const parsedFormValues = parsed.data;

  const ssClient = await createSSClient();

  let clientId = formDataObject.clientId as string;

  console.log("formDataObject");
  console.log(formDataObject);

  if (formDataObject.existingClient === "true") {
    console.log("existing client");
    // const { error, data } = await updateClientPerson(ssClient, clientId, {
    //   bluesky_id: parsedFormValues.bluesky_id,
    //   instagram_id: parsedFormValues.instagram_id,
    // });
    // if (error) {
    //   console.error("existing client function");
    //   console.error(error);
    //   actionResults.errors = {
    //     preferred_name: "Failed to update client.",
    //   };
    //   return actionResults;
    // }
  }

  if (formDataObject.existingClient === "false" && clientId === "") {
    console.log("NOT existing client");
    const { error, data } = await createClientPerson(ssClient, {
      email: parsedFormValues.email,
      phone: parsedFormValues.phone,
      preferred_name: parsedFormValues.perferred_name,
    });

    clientId = data?.id ?? "";

    if (error) {
      console.error("not existing client function");
      console.error(error);
      actionResults.errors = {
        preferred_name: "Failed to update client.",
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
