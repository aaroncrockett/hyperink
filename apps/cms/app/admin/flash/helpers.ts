import { FlashUI } from "./types";

export const getPinnedFlash = (
  flash: Partial<FlashUI>[],
  currentFlash: Partial<FlashUI>,
  currentPinnedOrder: number | null,
) => {
  let startLoc: null | number = null;

  const createPlaceHolder = () => {
    return { readable_name: "", pinned_order: null, id: "", publicUrl: "" };
  };

  const slots = flash.map((item, i) => {
    // if there is a pinned, add it
    if (item?.pinned_order != null) {
      return item;
    }
    // if loc as been set, don't override it
    if (startLoc === null) {
      startLoc = i;
    }
    // return a placeholder
    return createPlaceHolder();
  });
  // if there is a currentPinnedOrder, it has already been set, otherwise, set the clicked item
  if (currentPinnedOrder === null) {
    // if there is a start loc, put the pin there
    if (startLoc !== null) {
      slots[startLoc].readable_name = currentFlash.readable_name;
      slots[startLoc].id = currentFlash.id;
      slots[startLoc].publicUrl = currentFlash.publicUrl;
      if (startLoc === 0) slots[startLoc].pinned_order = 1;
      slots.push(createPlaceHolder());

      return slots;
    }
    // otherwise, put it in the "in-wait/removal" location
    // there can only be three pinned and one item must be "in-wait/removal"
    slots.push({
      readable_name: currentFlash.readable_name,
      pinned_order: null,
      id: currentFlash.id,
      publicUrl: currentFlash.publicUrl as string,
    });

    return slots;
  }

  slots.push(createPlaceHolder());

  return slots;
};
