"use server";

import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";

type GetClient = {
  data: {
    id: string;
  } | null;
};
export async function getClient(
  _prevState: GetClient,
  formData: FormData,
): Promise<GetClient> {
  return {
    data: { id: "" },
  };
}

export async function createTattoo(formData: FormData) {
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
  //     .from("tattoos")
  //     .insert(tattooData);

  //   if (error) throw new Error(error.message);

  // redirect("/admin/tattoos");
  return {
    data: [],
  };
}
