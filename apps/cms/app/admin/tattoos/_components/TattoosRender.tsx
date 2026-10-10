import { useState } from "react";

//

import { useTattoosContext } from "./TattoosProvider";
import { TattooItems } from "./TattooItems";

export function TattoosRender() {
  const { tattoosState } = useTattoosContext();

  return (
    <>
      {/* <div className="bg-surface-200-800/20 border-surface-300-700/70 border-2 p-4 rounded"></div> */}

      <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {tattoosState.map(
          (data) =>
            data?.public_url && (
              <div key={data?.id}>
                {data.title}
                <TattooItems
                  className="grid gap-2 md:gap-4 relative"
                  public_url={data.public_url}
                  title={data.title ?? ""}
                  pinned_order={data.pinned_order ?? null}
                  id={data.id ?? ""}
                />
              </div>
            ),
        )}
      </ul>
    </>
  );
}
