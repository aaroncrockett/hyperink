"use server";
// node
import { randomUUID } from "crypto";

// inktree
import {
  getClientPersonByEmail,
  getClientPeopleByTattooYear,
  getClientPersonByPreferredName,
  getClientPersonByPhone,
} from "@inktree/db";

// local outter
import {
  createServerClientAndAuth,
  getAuthedUser,
  uploadTattooImage,
} from "@/utils/db/server";

import type { ClientTable } from "@inktree/db";

// local
import { getImageFormInputs } from "./_helpers";

export type ClientFormState = {
  client: Partial<ClientTable> | null;
};

export async function getClient(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const tattooYear = Number(formData.get("tattoo_year"));
  const preferredName = formData.get("preferred_name")?.toString();

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    throw new Error("Unauthorized");
  }

  let client;

  if (email) {
    client = await getClientPersonByEmail(authedClient, email);
  }
  if (phone) {
    client = await getClientPersonByPhone(authedClient, phone);
  }
  if (tattooYear) {
    client = await getClientPeopleByTattooYear(authedClient, tattooYear);
  }
  if (preferredName) {
    client = await getClientPersonByPreferredName(authedClient, preferredName);
  }

  if (!client) {
    return {
      ..._prevState,
      client: null,
    };
  }

  return {
    ..._prevState,
    client: client,
  };
}

export async function uploadImage(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const { files, styles, tags, setOrder, readableNames } =
      getImageFormInputs(formData);

    const authedClient = await createServerClientAndAuth();

    const {
      data: { user },
    } = await getAuthedUser(authedClient);

    if (!user) {
      return {
        ...state,
        tattooImages: null,
        error: "no client",
      };
    }

    const isImgSet = files.length > 1;
    const setId = isImgSet ? randomUUID() : null;

    const uploads = await Promise.all(
      files.map((file, index) =>
        uploadTattooImage(authedClient, file, {
          styles,
          tags,
          readable_name: readableNames[index],
          name: file.name,
          user_id: user.id,
          set_order: isImgSet ? setOrder[index] : null,
          set_id: setId,
        }),
      ),
    );

    return {
      ...state,
      tattooImages: uploads,
      error: "no client",
    };
  } catch (err) {
    return {
      ...state,
      tattooImages: null,
      error: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}
