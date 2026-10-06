// hyperink
import { type FlashUIRow } from "@hyperink/api/flash";
import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import {
  getFlashWithin,
  updateFlashWithin,
} from "@hyperink/api-domain-helpers/flash";
//
import { ErrorDisplay, Page } from "@hyperink/ui-react/components";
import { createSSClient, getAuthedUser } from "@/auth/server";
//
import { TaggedImagesComponent } from "./_components/TaggedImages";

export default async function TaggedImages({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ unselected?: string }>;
}) {
  const serverClient = await createSSClient();

  const { tag } = await params;

  const { unselected } = await searchParams;

  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return <ErrorDisplay error="no user found" />;

  const unselectedSplit = unselected?.split("+").filter(Boolean);

  const { data: tagData, error } = await getUsersTagOptions(
    serverClient,
    user.id,
  );

  let flash: Partial<FlashUIRow>[] | null = null;

  if (tag === "collections") {
    const { data, error } = await getFlashWithin(
      serverClient,
      ["id", "collection", "path", "readable_name"],
      [{ collection: unselectedSplit ?? [] }],
    );
    if (error || data === null) return <ErrorDisplay error="no user found" />;

    await updateFlashWithin(
      serverClient,
      { collection: "" },
      { id: data.map((flash) => flash.id) },
    );
    flash = data;
  }

  if (error || tagData === null) return <ErrorDisplay error="no user found" />;

  return (
    <Page>
      <h1 className="hI-h1">Tagged Images</h1>

      {flash?.map((item) => (
        <TaggedImagesComponent
          key={item.id}
          item={item}
          tag={tag}
          tags={tagData.collections}
        />
      ))}
    </Page>
  );
}
