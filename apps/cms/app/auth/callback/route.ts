import { NextResponse } from "next/server";
import {
  createServerClientAndAuth,
  exchangeCodeForSession,
  getUser,
} from "@/utils/supabase/server";

import type { Client } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/admin")) next = "/admin";

  if (code) {
    const authedClient: Client = await createServerClientAndAuth();

    const { error } = await exchangeCodeForSession(authedClient, code);

    if (!error) {
      const {
        data: { user },
      } = await getUser(authedClient);
      if (!user) throw new Error("Unauthorized");

      // const { error } = await authedClient.insertRow({
      //   table: "profile",
      //   values: { id: user.id, email: user.email },
      // });

      // if (error) {
      //   if (error?.code === "23505") return { data: null, error: null };
      //   return NextResponse.redirect(`${origin}/error`);
      // }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/error`);
}
