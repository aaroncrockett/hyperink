import { type NextRequest } from "next/server";
import { updateSession } from "@/business/proxy";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}
