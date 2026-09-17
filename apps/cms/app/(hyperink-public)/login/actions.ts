"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
//
import type { Client } from "@hyperink/service-providers";
//
import {
  createSSClient,
  signInWithPassword,
  signUp,
  signInWithOAuth,
} from "@/auth/server";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function login(formData: FormData) {
  const client: Client = await createSSClient();

  const result = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    redirect("/error");
  }

  const { error } = await signInWithPassword(client, result.data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signup(formData: FormData) {
  const client: Client = await createSSClient();

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
  const client: Client = await createSSClient();

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
