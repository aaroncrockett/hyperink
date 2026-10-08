"use client";

//
import { TattoosProvider } from "./TattoosProvider";
import { TattoosRender } from "./TattoosRender";
//
import { TattooUI } from "../data";

type FlashProps = {
  collection: string | null;
  tattoos: Partial<TattooUI>[];
  collections: string[] | null;
  profile_tattoo_id: string;
};

export function Tattoos({
  tattoos,
  collection,
  collections,
  profile_tattoo_id,
}: FlashProps) {
  return (
    <div className="flex flex-col gap-4 bg-surface-200-800/20 rounded p-2 md:p-4">
      <TattoosProvider
        tattoos={tattoos}
        collection={collection}
        collections={collections ?? []}
        profile_tattoo_id={profile_tattoo_id}
      >
        <TattoosRender />
      </TattoosProvider>
    </div>
  );
}
