"use client";
// 3rd party
import { motion } from "motion/react";
//
import { useState } from "react";
//
import { Icon } from "@hyperink/ui-react/components";
import {
  resetAndUpdatePinnedTattoos,
  getTattoos,
} from "@hyperink/api-domain-helpers/tattoo";
//
import { createBrowserClient } from "@/auth/client";
//
import { type TattooUI, TATTOO_METADATA_KEYS } from "../data";
import { getPinnedTattoos } from "../helpers";
import { PinItems } from "./PinItems";
import { useTattoosContext } from "./TattoosProvider";

type ModalProps = {
  handleModalState: (e: React.MouseEvent) => void;
  pinned_order: number | null;
  title: string;
  id: string;
  public_url: string;
};

export function PinnedModal({
  handleModalState,
  title,
  id,
  pinned_order,
  public_url,
}: ModalProps) {
  const { getFirstThreeTattoos, tattoosState, setTattoosState } =
    useTattoosContext();
  const tattoos = getFirstThreeTattoos();
  const [items, setItems] = useState(
    getPinnedTattoos(
      tattoos,
      { title: title, id: id, public_url: public_url },
      pinned_order,
    ),
  );

  const handleSetItems = (newItems: Partial<TattooUI>[]) => setItems(newItems);

  const handleUpdatePinned = async () => {
    const browserClient = await createBrowserClient();

    await resetAndUpdatePinnedTattoos(browserClient, tattoos, items);

    const tattooSelectKeys = [...TATTOO_METADATA_KEYS] as (keyof TattooUI)[];

    const where = [{ id: id, collection: tattoosState }];

    const { data: tattooData, error: tattooError } = await getTattoos(
      browserClient,
      tattooSelectKeys,
      where,
    );

    if (tattooError) return;

    if (!tattooData) return;

    setTattoosState(tattooData);
  };

  return (
    <motion.div
      key="tattoo-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-9999 inset-0 bg-primary-500/90"
    >
      <div className="fixed z-9999 bg-surface-950-50/90 inset-2 md:inset-3 lg:inset-4 rounded">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={(e) => {
            handleUpdatePinned();
            handleModalState(e);
          }}
        >
          <motion.span
            className="relative z-50"
            initial={{ color: "var(--color-surface-200)" }}
            whileHover={{
              y: -1,
              scale: 1.015,
              color: "var(--color-primary-100)",
            }}
            whileTap={{
              scale: 1.02,
              color: "var(--color-primary-100)",
            }}
          >
            <Icon size="xl" name="close" />
          </motion.span>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 lg:gap-4 md:grid-cols-4 p-4 lg:p-6 ">
          {items && <PinItems handleSetItems={handleSetItems} items={items} />}
        </div>
      </div>
    </motion.div>
  );
}
