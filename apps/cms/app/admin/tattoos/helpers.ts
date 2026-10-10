import { type TattooUIPublic } from "./data";

export const getPinnedTattoos = (
  tattoo: Partial<TattooUIPublic>[],
  currentTattoo: Partial<TattooUIPublic>,
  currentPinnedOrder: number | null,
) => {
  let startLoc: null | number = null;

  const createPlaceHolder = () => {
    return {
      title: "",
      pinned_order: null,
      id: "",
      public_url: "",
    };
  };

  const slots = tattoo.map((item, i) => {
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
      slots[startLoc].title = currentTattoo.title;
      slots[startLoc].id = currentTattoo.id;
      slots[startLoc].public_url = currentTattoo.public_url;
      if (startLoc === 0) slots[startLoc].pinned_order = 1;
      slots.push(createPlaceHolder());

      return slots;
    }
    // otherwise, put it in the "in-wait/removal" location
    // there can only be three pinned and one item must be "in-wait/removal"
    slots.push({
      title: currentTattoo.title,
      pinned_order: null,
      id: currentTattoo.id,
      public_url: currentTattoo.public_url as string,
    });

    return slots;
  }

  slots.push(createPlaceHolder());

  return slots;
};
