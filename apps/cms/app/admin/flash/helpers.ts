import { FlashUIPublic } from "./data";
import { FlashOptsUI } from "@hyperink/api/options";
import { getFlash } from "@hyperink/api-domain-helpers/flash";
import type { Client } from "@hyperink/service-providers";

import { FLASH_METADATA_KEYS, type FlashUI } from "./data";

export const getPinnedFlash = (
  flash: Partial<FlashUIPublic>[],
  currentFlash: Partial<FlashUIPublic>,
  currentPinnedOrder: number | null,
) => {
  let startLoc: null | number = null;

  const createPlaceHolder = () => {
    return {
      readable_name: "",
      pinned_order: null,
      id: "",
      public_url: "",
    };
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
      slots[startLoc].public_url = currentFlash.public_url;
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
      public_url: currentFlash.public_url as string,
    });

    return slots;
  }

  slots.push(createPlaceHolder());

  return slots;
};

export const initFlash = async (
  client: Client,
  userId: string,
  flashOpts: FlashOptsUI,
) => {
  let defaultCollection = "";

  if (flashOpts && flashOpts.defaultCollection) {
    defaultCollection = flashOpts.defaultCollection;
  }

  const flashSelectKeys = [...FLASH_METADATA_KEYS] as (keyof FlashUI)[];

  let emptyDefault = false;

  if (defaultCollection !== "") {
    const where = [{ user_id: userId }, { collection: defaultCollection }];

    const { data: flashData } = await getFlash(client, flashSelectKeys, where);

    if (flashData) {
      return {
        emptyDefault,
        defaultCollection: defaultCollection,
        flashData: flashData,
        flashError: null,
      };
    }
    emptyDefault = true;
  }
  const where = [{ user_id: userId }];

  const { data: flashData, error: flashError } = await getFlash(
    client,
    flashSelectKeys,
    where,
  );

  return {
    emptyDefault,
    defaultCollection: "",
    flashData: flashData,
    flashError: flashError,
  };
};
