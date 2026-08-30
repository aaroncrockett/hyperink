"use client";
// 3rd party
import { motion } from "motion/react";
// react
import { useState } from "react";
// @local
import { Icon } from "@/ui";
import { createBrowserClient } from "@/auth/client";
import { FormError } from "@hyperinkstudio/ui-react-next/components";
//
import {
  getFlashByCollection,
  updatePinnedFlash,
  getFlashPublicUrl,
} from "@/business/flash";

// local
import { type FlashUI } from "../types";
import { getPinnedFlash } from "../helpers";
import { PinItems } from "./PinItems";
import { useFlashContext } from "./FlashProvider";

type ModalProps = {
  handleModalState: (e: React.MouseEvent) => void;
  collection: string;
  pinned_order: number | null;
  readable_name: string;
  id: string;
  publicUrl: string;
};

export function PinnedModal({
  handleModalState,
  readable_name,
  id,
  pinned_order,
  publicUrl,
}: ModalProps) {
  const { getFirstThreeFlash, collection, setFlashState } = useFlashContext();
  const flash = getFirstThreeFlash();
  const [items, setItems] = useState(
    getPinnedFlash(
      flash,
      { readable_name: readable_name, id: id, publicUrl: publicUrl },
      pinned_order,
    ),
  );
  const handleSetItems = (newItems: Partial<FlashUI>[]) => setItems(newItems);

  const handleUpdatePinned = async () => {
    const browserClient = await createBrowserClient();

    await Promise.all(
      flash.map((item) => {
        return updatePinnedFlash(browserClient, {
          id: item.id!,
          pinned_order: null,
        });
      }),
    );

    await Promise.all(
      items
        .filter((item) => item.pinned_order != null && item.id !== "")
        .map((item) =>
          updatePinnedFlash(browserClient, {
            id: item.id!,
            pinned_order: item.pinned_order!,
          }),
        ),
    );
    const { data, error } = await getFlashByCollection(
      browserClient,
      collection,
    );

    if (error) {
      console.error(error);
    }

    const flashData = await Promise.all(
      data.map(async (data) => {
        const { data: url } = await getFlashPublicUrl(browserClient, data.path);

        return {
          ...data,
          publicUrl: url.publicUrl,
        };
      }),
    );

    if (!flashData) {
      return <FormError error="Error: problem with getFlashPublicUrl" />;
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
