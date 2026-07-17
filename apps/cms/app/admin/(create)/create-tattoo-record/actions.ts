"use server";

import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import {
  getClientPersonByEmail,
  getClientPersonByPhone,
  getClientPersonByPreferredName,
  getClientPeopleByTattooYear,
  createClientTattoo,
  type ClientTable,
} from "@inktree/db";

import { redirect } from "next/navigation";

import { getClientTattooInputs } from "./_helpers";
type GetClient = {
  clients: ClientTable | null;
};

export async function getClient(
  _prevState: GetClient,
  formData: FormData,
): Promise<GetClient> {
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    throw new Error("Unauthorized");
  }

  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const preferredName = formData.get("preferredName")?.toString();
  const tattooYear = Number(formData.get("tattooYear"));

  let result;

  if (email) {
    result = await getClientPersonByEmail(authedClient, email);
  }

  if (phone) {
    result = await getClientPersonByPhone(authedClient, Number(phone));
  }

  if (preferredName) {
    result = await getClientPersonByPreferredName(authedClient, preferredName);
  }

  if (tattooYear) {
    result = await getClientPeopleByTattooYear(authedClient, tattooYear);
  }

  if (result?.error) {
    throw new Error(result.error.message);
  }

  return {
    ..._prevState,
    clients: result?.data,
  };
}

export async function createTattoo(formData: FormData) {
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) throw new Error("Unauthorized");

  const tattoos = getClientTattooInputs(formData);

  const clientId = formData.get("client_id")?.toString();

  if (!clientId) {
    throw new Error("Missing client id");
  }
  const tattooData = {
    ...getClientTattooInputs(formData),
    client_id: clientId,
  };

  const { data, error } = await createClientTattoo(authedClient, tattooData);

  redirect("/admin");
}
