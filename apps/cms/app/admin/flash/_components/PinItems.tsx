import Image from "next/image";
//
import { cn } from "@hyperinkstudio/utils";
//
import { FlashUI } from "../types";

type PinItemsProps = {
  items: Partial<FlashUI>[];
  handleSetItems: (items: Partial<FlashUI>[]) => void;
};

export function PinItems({ items, handleSetItems }: PinItemsProps) {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number,
  ) => {
    e.preventDefault();

    const dragIndex = Number(e.dataTransfer.getData("index"));

    const newItems = [...items];
    const [item] = newItems.splice(dragIndex, 1);

    const firstEmptyIndex = newItems.findIndex(
      (item) => item.readable_name === "",
    );

    if (
      dropIndex !== 3 &&
      firstEmptyIndex !== -1 &&
      dropIndex > firstEmptyIndex
    ) {
      newItems.splice(firstEmptyIndex, 0, item);
    } else {
      newItems.splice(dropIndex, 0, item);
    }

    const reorderedItems = newItems.map((item, i) => ({
      ...item,
      pinned_order: i < 3 ? i + 1 : null,
    }));

    handleSetItems(reorderedItems);
  };

  return (
    <>
      {items.map((item, i) => (
        <div
          className={cn(
            "flex flex-col gap-2 md:gap-4 justify-start items-center p-2 sm:p-4 rounded-xl",
            i === 3 ? "bg-tertiary-500/40" : "bg-surface-500/40",
          )}
          key={item.id || i}
          draggable={item.readable_name != ""}
          onDragStart={
            item.readable_name != "" ? (e) => handleDragStart(e, i) : undefined
          }
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, i)}
        >
          <span className="text-center flex flex-col gap-0.5 justify-center items-center text-surface-50-950! md:text-xl! text-lg!">
            {i === 3 ? (
              <>
                <span className="font-bold! text-surface-50-950!">
                  &quot;IN-WAIT / REMOVAL&quot;
                </span>
              </>
            ) : (
              <>
                <span className="text-md! text-surface-50-950!">PIN</span>
                <span className="md:text-3xl! text-2xl! font-bold! text-surface-50-950!">
                  {i + 1}
                </span>
              </>
            )}
          </span>
          {item.publicUrl && (
            <Image
              src={item.publicUrl}
              alt={`${item.readable_name ?? ""} - flash image`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto shadow"
            />
          )}

          {item.readable_name && (
            <p className="md:text-xl text-lg text-center text-surface-50-950">
              {item.readable_name}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
