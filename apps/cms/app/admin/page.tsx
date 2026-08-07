import Link from "next/link";
// Local @
import { type TattooRequest } from "@/db/types";
import { getLastThreeTattooRequests } from "@/db/tattooRequest";
// Local For Admin Pages
import { AdminPageComponent as AdminPage } from "./_components/AdminPageComponent";
import type { AdminPageProps } from "./types";
// Local Other
import { TattooRequests } from "./(features)/TattooRequests";
import { LINKS_ADMIN } from "../consts";

// hyperink
import { Heading } from "@hyperinkstudio/ui-react-next/components";

export default async function AdminHomePage({
  user,
  dbClient,
  pvtProfileId,
}: AdminPageProps) {
  let tattooRequests: Partial<TattooRequest>[] | null = null;

  if (user && dbClient) {
    const { data: tattReqData } = await getLastThreeTattooRequests(dbClient);
    tattooRequests = tattReqData;
  }

  return (
    <AdminPage
      user={user}
      pvtProfileId={pvtProfileId ?? null}
      title="Admin Home"
    >
      {tattooRequests && (
        <TattooRequests
          lead={<Heading text="Tattoo Requests" as="h2" />}
          requests={tattooRequests ?? []}
          trail={
            <Link
              href={LINKS_ADMIN.tattooRequests.href}
              className="underline text-secondary-500"
            >
              See More requests
            </Link>
          }
        />
      )}
    </AdminPage>
  );
}
