"use client";
// 3rd party
import { motion } from "motion/react";
//
import { useState } from "react";
//
import { Icon, ErrorDisplay } from "@hyperink/ui-react/components";
import {
  resetAndUpdatePinnedFlash,
  getFlash,
} from "@hyperink/api-domain-helpers/flash";
//
import { createBrowserClient } from "@/auth/client";
//
import { type FlashUI, FLASH_METADATA_KEYS } from "../data";
import { getPinnedFlash } from "../helpers";
import { PinItems } from "./PinItems";
import { useFlashContext } from "./FlashProvider";

type ModalProps = {
  handleModalState: (e: React.MouseEvent) => void;
  collection: string;
  pinned_order: number | null;
  readable_name: string;
  user_id: string;
  public_url: string;
};

export function PinnedModal({
  handleModalState,
  readable_name,
  user_id,
  pinned_order,
  public_url,
}: ModalProps) {
  const { getFirstThreeFlash, collectionState, setFlashState } =
    useFlashContext();
  const flash = getFirstThreeFlash();
  const [items, setItems] = useState(
    getPinnedFlash(
      flash,
      { readable_name: readable_name, id: user_id, public_url: public_url },
      pinned_order,
    ),
  );
  const handleSetItems = (newItems: Partial<FlashUI>[]) => setItems(newItems);

  const handleUpdatePinned = async () => {
    const browserClient = await createBrowserClient();

    const { error: pinnedError } = await resetAndUpdatePinnedFlash(
      browserClient,
      flash,
      items,
    );

    if (pinnedError)
      return (
        <ErrorDisplay
          error={
            pinnedError.message ?? "error resetting up updating pinned flash."
          }
        />
      );

    const flashSelectKeys = [...FLASH_METADATA_KEYS] as (keyof FlashUI)[];

    const where = [{ user_id: user_id, collection: collectionState }];

    const { data: flashData, error: flashError } = await getFlash(
      browserClient,
      flashSelectKeys,
      where,
    );

    if (flashError)
      return (
        <ErrorDisplay error={flashError.message ?? "error getting flash."} />
      );

    if (!flashData) {
      return <ErrorDisplay error="error and we don't have any flash!" />;
    }

    setFlashState(flashData);
  };

  return (
    <motion.div
      key="flash-modal"
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
