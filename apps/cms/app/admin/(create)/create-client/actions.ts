"use server";
// next
import { redirect } from "next/navigation";

import { EDITABLE_CLIENT_COL_KEYS } from "@inktree/db";

// local outter
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { createClientPerson } from "@inktree/db";
import { handleStringFormValues } from "@inktree/utils";

export async function createClient(formData: FormData) {
  const { hasError, values, errors } = handleStringFormValues(
    formData,
    EDITABLE_CLIENT_COL_KEYS,
  );

  if (hasError) return { errors };

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
    ...values,
  });

  if (error) {
    throw error;
  }
  if (createTattoo) {
    redirect(
      `/admin/create-tattoo-record?clientId=${client?.id}&preferredName=${client?.preferred_name}`,
    );
  }

  redirect(`/admin`);
}
