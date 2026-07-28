"use server";

import { createSSClient, getAuthedUser } from "@/db/server";
import {
  getClientsPersonsByEmail,
  getClientsPersonsByPhone,
  getClientsPersonsByPreferredName,
  createClientTattoo,
  type ClientTable,
} from "@hyperinkstudio/db";

import { redirect } from "next/navigation";

import { getClientTattooInputs } from "./_helpers";
type GetClients = {
  clients: ClientTable[] | null;
  errors: Record<string, string> | null;
};

export async function getClients(
  _prevState: GetClients,
  formData: FormData,
): Promise<GetClients> {
  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    throw new Error("Unauthorized");
  }

  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const preferredName = formData.get("preferredName")?.toString();

  let result;

  if (email) {
    result = await getClientsPersonsByEmail(authedClient, email);
  }

  if (phone) {
    result = await getClientsPersonsByPhone(authedClient, phone);
  }

  if (preferredName) {
    result = await getClientsPersonsByPreferredName(
      authedClient,
      preferredName,
    );
  }

  if (result?.error) {
    throw new Error(result.error.message);
  }

  return {
    ..._prevState,
    clients: result?.data ?? [],
  };
}

export async function createTattoo(formData: FormData) {
  const authedClient = await createSSClient();

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
