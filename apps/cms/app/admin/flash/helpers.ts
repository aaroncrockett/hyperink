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

  const getGenericFlash = async (msg: string) => {
    const where = [{ user_id: userId }];

    const { data: flashData, error } = await getFlash(
      client,
      flashSelectKeys,
      where,
    );
    if (error) {
      return {
        initMsg: null,
        defaultCollection: "",
        flashData: flashData,
        flashError: null,
      };
    }

    return {
      initMsg: msg,
      defaultCollection: "",
      flashData: flashData,
      flashError: null,
    };
  };

  if (flashOpts && flashOpts.default_collection) {
    defaultCollection = flashOpts.default_collection;
  }

  const flashSelectKeys = [...FLASH_METADATA_KEYS] as (keyof FlashUI)[];

  if (defaultCollection !== "") {
    const where = [{ user_id: userId }, { collection: defaultCollection }];

    const { data: flashCollData, error: flashCollError } = await getFlash(
      client,
      flashSelectKeys,
      where,
    );

    if (flashCollError) {
      return {
        initMsg: null,
        flashData: [],
        flashError: flashCollError,
        defaultCollection: "",
      };
    }

    if (flashCollData.length) {
      return {
        initMsg: null,
        flashData: flashCollData,
        flashError: null,
        defaultCollection,
      };
    }

    return getGenericFlash(
      "Your default collection has no flash associated with it. Click to edit your flash to add it to a collection.",
    );
  }

  return getGenericFlash(
    "You have no default collection yet. You can choose one under preferences.",
  );
};
