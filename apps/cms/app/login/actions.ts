"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createServerClientAndAuth,
  signInWithPassword,
  signUp,
  signInWithOAuth,
} from "@/utils/db/server";
import type { Client } from "@/utils/db/server";

export async function login(formData: FormData) {
  const client: Client = await createServerClientAndAuth();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await signInWithPassword(client, data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signup(formData: FormData) {
  const client: Client = await createServerClientAndAuth();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await signUp(client, data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signInWithGoogle() {
  const client: Client = await createServerClientAndAuth();

  const { data, error } = await signInWithOAuth(client, {
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    redirect("/error");
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (data.url) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    redirect(data.url);
  }
}
