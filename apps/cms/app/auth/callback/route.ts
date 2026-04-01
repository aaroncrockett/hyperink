import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import type { Client } from "../../../../../packages/db";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/admin")) next = "/admin";

  if (code) {
    const client: Client = await createClient();

    const { error } = await client.exchangeCodeForSession(code);

    if (!error) {
      const {
        data: { user },
      } = await client.getUser();
      if (!user) throw new Error("Unauthorized");

      const { error } = await client.insertRow({
        table: "profile",
        values: { id: user.id, email: user.email },
      });

      if (error) {
        if (error?.code === "23505") return { data: null, error: null };
        return NextResponse.redirect(`${origin}/error`);
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/error`);
}
