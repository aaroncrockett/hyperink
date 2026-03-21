import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import type { AuthClient } from "@inktree/auth";

export async function login(formData: FormData) {
  const supabase: AuthClient = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/account");
}
