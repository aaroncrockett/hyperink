"use server";
// Next.js
import { redirect } from "next/navigation";

// local outter
import { CreateClientCols } from "@/app/admin/(data)";
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
  // create Errors object for each action function
  let errors = { unauthorized: "", createPerson: "" };

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

  if (!user) {
    const unauthorizedError = {
      unauthorized: "the person is unauthorized",
    };
    errors = {
      ...errors,
      ...unauthorizedError,
    };
    return { errors };
  }

  const { data: client, error } = await createClientPerson(authedClient, {
    user_id: user?.id,
    ...clientValues,
  });

  if (error) {
    console.log(error);
    const createpersonError = {
      createPerson: "error creating a perseon with supabase",
    };
    errors = {
      ...errors,
      ...createpersonError,
    };
    return { errors };
  }

  if (createTattooValue) {
    redirect(
      `/admin/create-tattoo-record?clientId=${client?.id}&preferredName=${client?.preferred_name}`,
    );
  }

  redirect(`/admin`);
}
