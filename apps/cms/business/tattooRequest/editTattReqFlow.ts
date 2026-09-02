import { type Client, TattooRequest } from "@hyperinkstudio/services";
import { createClientPerson } from "@hyperinkstudio/api";
//
import { createClientTattoo } from "@/business/clientTattoo";
import { type ClientTattoo } from "@/business/types";
//
import { getUserData } from "@/app/admin/getUserData";
//
import { type TattReqFormEditable } from "./index";

type TattReqForm = TattooRequest &
  Partial<TattReqFormEditable> & {
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
  email: string,
  phone: string,
  type: string,
): Promise<TattReqFormState> {
  const { pvtProfileId } = await getUserData();

  let localClientId = clientId;
  if (clientId === null) {
    const { error, data } = await createClientPerson(
      client,
      {
        email: email,
        phone: phone,
      },
      pvtProfileId,
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

  const { data, error } = await createClientTattoo(client, {
    client_id: localClientId,
    type: type,
    title: "Im going to name this something!",
  });

  return {
    errors: null,
    tattooRequest: null,
  };
}
