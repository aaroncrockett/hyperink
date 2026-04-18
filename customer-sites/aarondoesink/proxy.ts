import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/db/proxy";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}
