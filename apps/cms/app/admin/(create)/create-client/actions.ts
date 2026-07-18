"use server";
// next
import { redirect } from "next/navigation";

import { CreateClientCols } from "../../(data)";

// local outter
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { createClientPerson } from "@inktree/db";
import { handleStringFormValues } from "@inktree/utils";

export type ClientFormState = {
  errors: Record<string, string>;
};

export async function createClient(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  let errors = { unauthorized: "", createperson: "" };
  const {
    hasError: hasClientError,
    values: clientValues,
    errors: clientErrors,
  } = handleStringFormValues(formData, CreateClientCols);

  if (hasClientError) {
    errors = {
      ...errors,
      ...clientErrors,
    };

    return { errors };
  }
  const {
    hasError,
    values: createTattooValue,
    errors: createTattooError,
  } = handleStringFormValues(formData, ["create_tattoo"]);

  if (hasError) {
    errors = {
      ...errors,
      ...createTattooError,
    };

    return { errors };
  }
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  // if (!user) {
  //   errors.unauthorized = "Unauthorized";
  //   return errors;
  // }

  const { data: client, error } = await createClientPerson(authedClient, {
    user_id: user?.id,
    ...clientValues,
  });

  if (error) {
    console.log(error);
    const createpersonError = {
      createpersonError: "error creating a perseon with supabase",
    };
    errors = {
      ...errors,
      ...createpersonError,
    };
  }

  console.log("wetrZ");
  if (createTattooValue) {
    redirect(
      `/admin/create-tattoo-record?clientId=${client?.id}&preferredName=${client?.preferred_name}`,
    );
  }

  redirect(`/admin`);
}
