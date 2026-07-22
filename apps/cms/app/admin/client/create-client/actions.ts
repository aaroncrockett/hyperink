"use server";
// Next.js
import { redirect } from "next/navigation";
// local outter
import { CREATE_CLIENT_COLS } from "@/db/clientPersons";
import type { ClientTable } from "@/db/types";
import { createServerClientAndAuth, getAuthedUser } from "@/db/server";
import { createClientPerson } from "@/db/clientPersons";
import { handleStringFormValues } from "@hyperinkstudio/utils";
import { LINKS_ADMIN } from "@/app/consts";

export type ClientFormState = {
  errors: Record<string, string> | null;
  client?: Partial<ClientTable> | null;
};

export async function createClient(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const {
    hasError: hasClientError,
    values: clientValues,
    errors: clientErrors,
  } = handleStringFormValues(formData, CREATE_CLIENT_COLS);

  if (hasClientError) {
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...clientErrors,
      },
    };
  }

  const createTattooValue = formData.get("create_tattoo");

  const authedClient = await createServe`rClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    const unauthorizedError = {
      unauthorized: "the person is unauthorized",
    };
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...unauthorizedError,
      },
    };
  }

  const { data: client, error } = await createClientPerson(authedClient, {
    user_id: user?.id,
    ...clientValues,
  });

  if (error) {
    const createpersonError = {
      createPerson: "error creating a perseon with supabase",
    };
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...createpersonError,
      },
    };
  }

  if (createTattooValue) {
    redirect(
      `${LINKS_ADMIN.createTattooRecord.href}?clientId=${client?.id}&preferredName=${client?.preferred_name}`,
    );
  }

  redirect(`${LINKS_ADMIN.home.href}`);
}
