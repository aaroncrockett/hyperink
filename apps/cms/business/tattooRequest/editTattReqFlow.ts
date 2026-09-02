import { type Client } from "@hyperinkstudio/services";
import { createClientPerson } from "@hyperinkstudio/api";
//
import { createClientTattoo } from "@/business/clientTattoo";
import { type ClientTattoo } from "@/business/types";

//
import { type TattReqEditable } from "./index";

type TattReqForm = TattReqEditable & {
  existingClient: string;
  clientId?: string;
};

type TattReqFormState = {
  tattooRequest: TattReqForm | ClientTattoo | null;
  errors: Record<string, string> | null;
};

export async function editTattReqFlow(
  client: Client,
  clientId: string | null,
  userId: string,
  tattData: ClientTattoo,
  email: string,
  phone: string,
): Promise<TattReqFormState> {
  let localClientId = clientId;
  console.log("clientid");
  console.log(clientId);
  console.log("clientid");
  if (clientId === null) {
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
      const errors = {
        client_id: "Failed to update client.",
      };
      return {
        errors: errors,
        tattooRequest: null,
      };
    }
    localClientId = data?.id;
  }

  if (localClientId === null) {
    return {
      errors: { clientId: "client ID is null" },
      tattooRequest: null,
    };
  }

  console.log(localClientId);

  const { data, error } = await createClientTattoo(client, {
    client_id: localClientId,
    type: tattData.type,
    flash_id: tattData.flash_id ?? null,
  });

  if (error) {
    console.error(error);
    return {
      errors: { clientTatt: "error creating client tattll" },
      tattooRequest: null,
    };
  }

  const clientTattooData = data as TattReqForm | ClientTattoo | null;

  return {
    errors: null,
    tattooRequest: clientTattooData,
  };
}
