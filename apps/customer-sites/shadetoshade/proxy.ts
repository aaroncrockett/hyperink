import { type NextRequest } from "next/server";
import { updateSession } from "@/auth/proxy";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}
