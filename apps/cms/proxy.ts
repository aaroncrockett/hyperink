import { type NextRequest } from "next/server";
import { updateSession } from "@/db/proxy";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};
