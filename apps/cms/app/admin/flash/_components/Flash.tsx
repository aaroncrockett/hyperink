"use client";

//
import { FlashProvider } from "./FlashProvider";
import { FlashRender } from "./FlashRender";
//
import { FlashUI } from "../data";

type FlashProps = {
  collection: string | null;
  flash: Partial<FlashUI>[];
  collections: string[] | null;
  user_id: string;
};

export function Flash({ flash, collection, collections, user_id }: FlashProps) {
  return (
    <div className="flex flex-col gap-4 bg-surface-200-800/20 rounded p-2 md:p-4">
      <FlashProvider
        flash={flash}
        collection={collection}
        collections={collections ?? []}
        user_id={user_id}
      >
        <FlashRender />
      </FlashProvider>
    </div>
  );
}
