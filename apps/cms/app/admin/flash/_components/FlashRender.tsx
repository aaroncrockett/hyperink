import { FlashItem } from "./FlashItem";
import { useFlashContext } from "./FlashProvider";

export function FlashRender() {
  const { collection, flashState } = useFlashContext();
  return (
    <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {flashState.map((data, i) =>
        data?.publicUrl ? (
          <FlashItem
            className="grid gap-2 md:gap-4 relative"
            collection={collection}
            key={data.id}
            id={data.id}
            publicUrl={data.publicUrl}
            pinned_order={data.pinned_order ?? null}
            readable_name={data.readable_name}
          />
        ) : null,
      )}
    </ul>
  );
}
