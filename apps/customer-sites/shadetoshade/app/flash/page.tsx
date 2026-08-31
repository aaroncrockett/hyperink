import {
  Page,
  Heading,
  FormError,
} from "@hyperinkstudio/ui-react-next/components";
//
import { getFlashDisplays, getFlashPublicUrl } from "@hyperinkstudio/business";
// Local @
import { createSSClient } from "@/auth/server";
// Local
import { Flash } from "./_components/Flash";

const client = await createSSClient();

const { data: flash, error } = await getFlashDisplays(client);

const flashData = await Promise.all(
  flash.map(async (data) => {
    const { data: url } = await getFlashPublicUrl(client, data.path);

    return {
      ...data,
      publicUrl: url.publicUrl,
    };
  }),
);

export default async function FlashPage() {
  if (error) {
    return <FormError error="There was an error getting Flash" />;
  }

  return (
    <Page cls="main-padding">
      <Heading as="h1" text="Flash AF" />
      <Flash flash={flashData} />
    </Page>
  );
}
