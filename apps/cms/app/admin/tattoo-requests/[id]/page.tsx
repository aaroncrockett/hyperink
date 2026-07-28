// React

// Hyper Ink
import { Heading, Page } from "@hyperinkstudio/ui-react/components";
// Local DB
import { getTattooRequestById } from "@/db/tattooRequest";
import { createSSClient } from "@/db/server";
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

  const reqEmail = tattRequest?.email;
  const reqPhone = tattRequest?.phone;

  if (!reqEmail || !reqPhone) {
    console.error("no email or phone");
    return null;
  }

  const { data: clientPersons } = await getClientPersonsByEmailOrPhone(
    ssrClient,
    reqEmail,
    reqPhone,
  );

  console.log("client persons");
  console.log(clientPersons);
  if (!clientPersons) return null;

  if (clientPersons.length > 2)
    console.log("how is there more than one person");

  if (clientPersons.length === 2)
    console.log("wooooooo two ppl? what are the odds");

  // const email = clientPersons[0].email;
  // const phone = clientPersons[0].phone;

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request" />
      {/* Look up the client by the email and phone */}
      {/* 
      {email}
      {phone}
      {!email ? "nope" : "yup"} */}

      <TattooForm tattRequest={tattRequest} />
    </Page>
  );
}
