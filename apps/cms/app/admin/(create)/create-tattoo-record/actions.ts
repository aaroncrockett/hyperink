"use server";

import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import {
  getClientPersonByEmail,
  getClientPersonByPhone,
  getClientPersonByPreferredName,
  type ClientTable,
} from "@inktree/db";

type GetClient = {
  clients: ClientTable | null;
};

type CreateTattoo = {
  clientId: string;
  clientTattoo: {
    id: string;
  } | null;
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
  // const year = formData.get("year")?.toString();

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

  if (result?.error) {
    throw new Error(result.error.message);
  }

  return {
    clients: result?.data,
  };
}

export async function createTattoo(
  prevState: CreateTattoo,
  formData: FormData,
) {
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) throw new Error("Unauthorized");

  console.log(formData);

  //   const tattooData = {
  //     title: formData.get("title"),
  //     type: formData.get("type"),
  //     deposit_amount: Number(formData.get("deposit_amount")) || 0,
  //     deposit_amount_progress:
  //       Number(formData.get("deposit_amount_progress")) || 0,
  //     deposit_amount_paid_at:
  //       formData.get("deposit_amount_paid_at") === "on",
  //     drawing_amount: Number(formData.get("drawing_amount")) || 0,
  //     drawing_amount_progress:
  //       Number(formData.get("drawing_amount_progress")) || 0,
  //     drawing_amount_paid_at:
  //       formData.get("drawing_amount_paid_at") === "on",
  //     total_price: Number(formData.get("total_price")) || 0,
  //     paid_progress: Number(formData.get("paid_progress")) || 0,
  //     total_paid_at: formData.get("total_paid_at") === "on",
  //     notes: formData.get("notes"),
  //     user_id: user.id,
  //   };

  //   const { error } = await authedClient
  //     .from("client_tattoo")
  //     .insert(tattooData);

  //   if (error) throw new Error(error.message);

  // redirect("/admin/tattoos");
  return {
    clientId: "",
    clientTattoo: {
      id: "",
    },
  };
}
