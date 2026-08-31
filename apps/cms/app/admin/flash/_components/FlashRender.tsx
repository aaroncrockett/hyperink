import { useState } from "react";
// hyperink
import { toLabelValue } from "@hyperinkstudio/utils";
import { FormError } from "@hyperinkstudio/ui-react-next/components";
// @ locals
import { ComboBoxComponent as ComboBox } from "@/ui";
import { Heading } from "@/ui";
//
import { getFlashByCollection, getFlashPublicUrl } from "@/business/flash";
//
import { createBrowserClient } from "@/auth/client";
//
import { capitalizeWords } from "@hyperinkstudio/utils";
// local
import { FlashItem } from "./FlashItem";
import { useFlashContext } from "./FlashProvider";
//
import { FlashUI } from "../types";

const client = createBrowserClient();

export function FlashRender({
  collectionOptions,
}: {
  collectionOptions: string[];
}) {
  const { collectionState, setCollectionState, flashState, setFlashState } =
    useFlashContext();

  const [errorState, setErrorState] = useState("");

  const handleCollFilterChange = async (value: string) => {
    const { data: collectionData, error } = await getFlashByCollection(
      client,
      value,
    );

    const flashData = await Promise.all(
      collectionData.map(async (data) => {
        const { data: url } = await getFlashPublicUrl(client, data.path);

        return {
          ...data,
          publicUrl: url.publicUrl,
        };
      }),
    );

    if (error) {
      console.error(error);
      setErrorState("error getting by flash collection");
    }
    const flashUIData = flashData as FlashUI[];

    setFlashState(flashUIData ?? []);
    setCollectionState(capitalizeWords(value));
  };

  const collOptsLabelValPair = collectionOptions.map((coll) => {
    return toLabelValue(coll);
  });

  if (errorState) {
    return <FormError error={errorState} />;
  }
  return (
    <>
      {collOptsLabelValPair.length > 1 && (
        <ComboBox
          defaultValue={collectionState}
          boxLabel="Filter By Collection"
          data={collOptsLabelValPair}
          onValueChangeCb={handleCollFilterChange}
        />
      )}

      <Heading as="h4" weightCls="font-bold">
        Collection: {collectionState}
      </Heading>
      <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {flashState.map((data) =>
          data?.publicUrl ? (
            <div key={data.id + collectionState}>
              <FlashItem
                className="grid gap-2 md:gap-4 relative"
                collection={collectionState}

                id={data.id}
                publicUrl={data.publicUrl}
                pinned_order={data.pinned_order ?? null}
                readable_name={data.readable_name}
              />
            </div>
          ) : null,
        )}
      </ul>
    </>
  );
}
