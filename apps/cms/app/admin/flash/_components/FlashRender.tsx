import { useState } from "react";
//
import { NULL_COLLECTION_VALUE } from "@hyperink/api/options";
import { toLabelValue } from "@hyperink/api-domain-helpers";
import { getFlash } from "@hyperink/api-domain-helpers/flash";
import { Select, ErrorDisplay } from "@hyperink/ui-react/components";
//
import { createBrowserClient } from "@/auth/client";
//

import { useFlashContext } from "./FlashProvider";
import { FlashItemGeneral } from "./FlashItemGeneral";
import { FlashItemCollection } from "./FlashItemCollection";
import { FLASH_METADATA_KEYS, type FlashUI } from "../data";

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

  const collectionsWithNull = [NULL_COLLECTION_VALUE, ...collections];

  const [collectionsState] = useState(collectionsWithNull);

  const onCollectionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const client = createBrowserClient();

    const value = e.target.value;

    const where =
      value !== NULL_COLLECTION_VALUE
        ? [{ user_id: user_id }, { collection: value }]
        : [{ user_id: user_id }];

    const { data: flashData, error: flashError } = await getFlash(
      client,
      [...FLASH_METADATA_KEYS] as (keyof FlashUI)[],
      where,
    );

    if (flashError) setErrorState("get flash error");

    setFlashState(flashData ?? []);
    setCollectionState(value);
  };

  const collectionsLabelValue = collectionsState?.map((coll) => {
    return toLabelValue(coll);
  });

  if (errorState) return <ErrorDisplay error={errorState} />;

  return (
    <>
      {collectionsLabelValue && (
        <Select
          defaultValue={collectionState}
          label="Filter By Collection"
          options={collectionsLabelValue}
          onChange={onCollectionChange}
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
                    public_url={data.public_url}
                    readable_name={data.readable_name ?? ""}
                    pinned_order={data.pinned_order ?? null}
                    id={data.id ?? ""}
                  />
                ) : (
                  <FlashItemGeneral
                    className="grid gap-2 md:gap-4 relative"
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
