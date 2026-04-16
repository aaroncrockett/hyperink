import { NextResponse } from "next/server";
import {
  createServerClientAndAuth,
  exchangeCodeForSession,
  getAuthedUser,
} from "@/utils/db/server";

import type { Client } from "@/utils/db/server";

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
      } = await getAuthedUser(authedClient);
      if (!user) throw new Error("Unauthorized");

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/error`);
}
