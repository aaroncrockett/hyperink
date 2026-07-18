"use server";

import { randomUUID } from "crypto";

import {
  getClientPersonByEmail,
  getClientPersonByPreferredName,
  getClientPersonByPhone,
} from "@inktree/db";

import {
  createServerClientAndAuth,
  getAuthedUser,
  uploadTattooImage,
} from "@/utils/db/server";

import type { ClientTable } from "@inktree/db";

import { getImageFormInputs } from "./_helpers";

export type ClientFormState = {
  client: Partial<ClientTable> | null;
};

export async function getClient(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const preferredName = formData.get("preferred_name")?.toString();

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    throw new Error("Unauthorized");
  }

  let client: Partial<ClientTable> | null = null;

  if (email) {
    const { data } = await getClientPersonByEmail(authedClient, email);
    client = data;
  }

  if (phone) {
    const { data } = await getClientPersonByPhone(authedClient, phone);
    client = data;
  }

  if (preferredName) {
    const { data } = await getClientPersonByPreferredName(
      authedClient,
      preferredName,
    );
    client = data;
  }

  return {
    client,
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
        error: "Unauthorized",
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
      error: null,
    };
  } catch (err) {
    return {
      ...state,
      tattooImages: null,
      error: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}
