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
}
