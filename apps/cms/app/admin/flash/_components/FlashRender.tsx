import { useState } from "react";
//
import { toLabelValue } from "@hyperink/api-domain-helpers";
import { getFlash } from "@hyperink/api-domain-helpers/flash";
import { ComboBox, ErrorDisplay } from "@hyperink/ui-react/components";
//
import { createBrowserClient } from "@/auth/client";
//
// import { FlashItem } from "./FlashItem";
import { useFlashContext } from "./FlashProvider";
import { FlashItemGeneral } from "./FlashItemGeneral";
import { FlashItemCollection } from "./FlashItemCollection";
import { FLASH_METADATA_KEYS, type FlashUI } from "../data";

const client = createBrowserClient();

export function FlashRender() {
  const {
    collectionState,
    setCollectionState,
    flashState,
    setFlashState,
    collections,
    user_id,
  } = useFlashContext();

  const [errorState, setErrorState] = useState("");

  const onCollectionChange = async (value: string) => {
    const flashSelectKeys = [...FLASH_METADATA_KEYS] as (keyof FlashUI)[];

    const where = [{ user_id: user_id, collection: value }];

    const { data: flashData, error: flashError } = await getFlash(
      client,
      flashSelectKeys,
      where,
    );

    if (flashError) {
      setErrorState("get flash error");
    }

    setFlashState(flashData ?? []);
    setCollectionState(value);
  };

  const collectionsLabelValue = collections?.map((coll) => {
    return toLabelValue(coll);
  });

  if (errorState) {
    return <ErrorDisplay error={errorState} />;
  }
  return (
    <>
      {collectionsLabelValue && collectionsLabelValue.length > 1 && (
        <ComboBox
          defaultValue={collectionState}
          label="Filter By Collection"
          data={collectionsLabelValue}
          onValueChangeCb={onCollectionChange}
        />
      )}
      {collectionState && collections && (
        <h4 className="hI-h4 font-bold">Collection: {collectionState}</h4>
      )}

      <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {flashState.map(
          (data) =>
            data?.public_url && (
              <div key={data.id + collectionState}>
                {collectionState && collections ? (
                  <FlashItemCollection
                    className="grid gap-2 md:gap-4 relative"
                    collection={collectionState}
                    user_id={data.user_id ?? ""}
                    public_url={data.public_url}
                    readable_name={data.readable_name ?? ""}
                    pinned_order={data.pinned_order ?? null}
                    id={data.id ?? ""}
                  />
                ) : (
                  <FlashItemGeneral
                    className="grid gap-2 md:gap-4 relative"
                    user_id={data.user_id ?? ""}
                    public_url={data.public_url}
                    readable_name={data.readable_name ?? ""}
                    id={data.id ?? ""}
                  />
                )}
              </div>
            ),
        )}
      </ul>
    </>
  );
}
