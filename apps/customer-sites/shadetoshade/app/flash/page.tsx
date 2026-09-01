// hyperink
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

export default async function FlashPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const book = params.book;

  if (error) {
    return <FormError error="There was an error getting Flash" />;
  }

  return (
    <Page cls="main-padding ">
      <div className="mb-2 md:mb-3 xl:mb-4">
        <Heading as="h1" text="Flash AF" />
        {book && (
          <div className="flex flex-row gap-4 mt-6 items-center p-4 bg-surface-200-800/20">
            <span className="display  text-2xl md:text-3xl text-primary-500">
              Booking flash!
            </span>
            <span className="text-lg md:text-xl italic">
              Tap/click flash to book
            </span>
          </div>
        )}
      </div>
      <Flash flash={flashData} />
    </Page>
  );
}
