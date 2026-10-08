import { useState } from "react";
//

import { toLabelValue } from "@hyperink/api-domain-helpers";
import { getFlash } from "@hyperink/api-domain-helpers/flash";
import { Select, ErrorDisplay } from "@hyperink/ui-react/components";
//
import { createBrowserClient } from "@/auth/client";
//

import { useFlashContext } from "./TattoosProvider";
import { FlashItemGeneral } from "./TattooItemGeneral";
import { FlashItemCollection } from "./TattooItemCollection";
import { TATTOO_METADATA_KEYS, type TattooUI } from "../data";

export function TattoosRender() {
  const {
    collectionState,
    setCollectionState,
    flashState,
    setFlashState,
    collections,
    user_id,
  } = useFlashContext();

  const [errorState, setErrorState] = useState("");

  const [collectionsState] = useState(collections);

  // const onCollectionChange = async (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  // ) => {
  //   const client = createBrowserClient();

  //   const value = e.target.value;

  //   const where =
  //     value !== ""
  //       ? [{ user_id: user_id }, { collection: value }]
  //       : [{ user_id: user_id }];

  //   const { data: flashData, error: flashError } = await getFlash(
  //     client,
  //     [...TATTOO_METADATA_KEYS] as (keyof TattooUI)[],
  //     where,
  //   );

  //   if (flashError) setErrorState("get flash error");

  //   setFlashState(flashData ?? []);
  //   setCollectionState(value);
  // };

  const collectionsLabelValue = collectionsState?.map((coll) => {
    return toLabelValue(coll);
  });

  if (errorState) return <ErrorDisplay error={errorState} />;

  return (
    <>
      <div className="bg-surface-200-800/20 border-surface-300-700/70 border-2 p-4 rounded">
        {collectionsLabelValue && (
          <Select
            defaultValue={collectionState}
            label="Filter By Collection"
            options={collectionsLabelValue}
            onChange={onCollectionChange}
          />
        )}
      </div>
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
