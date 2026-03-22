"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import type { AuthClient } from "@inktree/auth";

export async function login(formData: FormData) {
  const authClient: AuthClient = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await authClient.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signup(formData: FormData) {
  const authClient: AuthClient = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await authClient.signUp(data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signInWithGoogle() {
  const authClient: AuthClient = await createClient();

  const { data, error } = await authClient.signInWithOAuth({
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
