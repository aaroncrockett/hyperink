// Hyper Ink
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";
// Local DB
import { getTattooRequestById } from "@/db/tattooRequest";
import { createSSClient } from "@/auth/server";
import { getClientPersonsByEmailOrPhone } from "@/db/clientPersons";
// Local
import { TattooForm } from "./_components/TattooForm";

type TattooRequestPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TattooRequestPage({
  params,
}: TattooRequestPageProps) {
  const { id } = await params;
  const ssrClient = await createSSClient();

  const { data: tattRequest } = await getTattooRequestById(ssrClient, id);

  if (!tattRequest) return null;

  if (!tattRequest?.email || !tattRequest?.phone) {
    console.error("no email or phone");
    return null;
  }

  const { data: clientPersons } = await getClientPersonsByEmailOrPhone(
    ssrClient,
    tattRequest?.email,
    tattRequest?.phone,
  );

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request" />

      {clientPersons && clientPersons.length === 0 && (
        <>
          <p>
            No client was found. We will create a Tattoo Record alongside a new
            client profile.
          </p>
          <TattooForm existingClient={false} tattRequest={tattRequest} />
        </>
      )}
      {/* // more than two clients found. something is wrong..*/}
      {clientPersons && clientPersons.length > 2 && (
        <>
          Is this even possible? There were more than 2 clients found. Contact
          support:D HyperInk is a small business run by humans, not robots. We
          can help you out.
        </>
      )}
      {/* // two clients found. ask client to delete one.*/}
      {clientPersons && clientPersons.length === 2 && (
        <>
          <p>
            There is more than one client found. Contact client the to verify
            the info, and contact support to update the client records. HyperInk
            is a small business run by humans, not robots. We can help you out.
          </p>
        </>
      )}

      {/* // one person found. we can add the request to them */}
      {clientPersons && clientPersons.length === 1 && (
        <>
          <p className="font-bold bg-secondary-300-700">
            {clientPersons[0].preferred_name} was found {clientPersons[0].email}
          </p>
          <span>Email: {clientPersons[0].email}</span>
          <span>{clientPersons[0].phone}</span>
          <p className="italic">
            We can create a new tattoo and add it to their records
          </p>
          <TattooForm
            clientId={clientPersons[0].id}
            existingClient={true}
            tattRequest={tattRequest}
          />
        </>
      )}
    </Page>
  );
}
