import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import type { AuthClient } from "@inktree/auth";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/admin")) next = "/admin";

  if (code) {
    const authClient: AuthClient = await createClient();

    const { error } = await authClient.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/error`);
}
