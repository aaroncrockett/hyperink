"use server";

import { redirect } from "next/navigation";

import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { createClientPerson } from "@inktree/db";

export async function createClient(formData: FormData) {
  const preferred_name = formData.get("preferred_name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const createTattoo = formData.get("create_tattoo");

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: client, error } = await createClientPerson(authedClient, {
    user_id: user.id,
    preferred_name,
    phone,
    email,
  });

  if (error) {
    throw error;
  }
  if (createTattoo) {
    redirect(
      `/admin/create-tattoo-record?clientId=${client.id}&preferredName=${client.preferred_name}`,
    );
  }

  redirect(`/admin`);
}
