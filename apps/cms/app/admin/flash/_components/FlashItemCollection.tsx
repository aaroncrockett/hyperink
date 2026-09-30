"use client";
//
import { Portal } from "@skeletonlabs/skeleton-react";
import { AnimatePresence, motion } from "motion/react";
//
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
//
import { cn } from "@hyperink/utils";
//
import { FlashItemImage } from "./FlashItemImage";
//
import { INTERNAL_FLASH_LINKS } from "@/data/links";
import { Icon } from "@hyperink/ui-react/components";

import { useFlashItemMenu, usePinnedModal } from "../_hooks";
import { FlashItemMenu } from "./FlashItemMenu";
import { PinnedModal } from "./PinnedModal";

type FlashItemProps = ComponentPropsWithoutRef<"li"> & {
  readable_name: string;
  id: string;
  public_url: string;
  pinned_order: number | null;
  collection: string;
};

export function FlashItem({
  readable_name,
  id,
  public_url,
  pinned_order,
  collection,
  ...props
}: FlashItemProps) {
  const { modalState, handleModalState } = usePinnedModal();
  const { menuState, handleFlashItemClick } = useFlashItemMenu();

  return (
    <li
      className={cn("group cursor-pointer", props.className)}

      onClick={(e) => {
        handleFlashItemClick();
        props.onClick?.(e);
      }}
    >
      In Colllections comp
      {/* modal and menu states */}
      <AnimatePresence mode="wait" initial={false}>
        {modalState && (
          <Portal>
            <PinnedModal
              pinned_order={pinned_order}
              readable_name={readable_name}
              id={id}
              public_url={public_url}
              collection={collection}
              handleModalState={(e) => handleModalState(e)}
            />
          </Portal>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        {menuState && (
          <FlashItemMenu
            handleModalState={(e) => handleModalState(e)}
            id={id}
          />
        )}
      </AnimatePresence>
      {/* Icon, Menu short-cuts -- :on-hover */}
      {!menuState && (
        <>
          <motion.span
            initial={{ color: "var(--color-surface-50)" }}
            whileHover={{
              y: -2,
              scale: 1.025,
              color: "var(--color-primary-300)",
            }}
            whileTap={{
              scale: 1.025,
              color: "var(--color-primary-300)",
            }}
            className="absolute top-2 right-2 bg-surface-800/80 rounded-sm p-2 hidden group-hover:block gap-2"
          >
            <Link
              onClick={(e) => e.stopPropagation()}
              href={`${INTERNAL_FLASH_LINKS.flash.href}/${id}`}
            >
              <Icon name="edit" />
            </Link>
          </motion.span>
          <motion.span
            initial={{ color: "var(--color-surface-50)" }}
            whileHover={{
              y: -2,
              scale: 1.025,
              color: "var(--color-primary-300)",
            }}
            whileTap={{
              scale: 1.025,
              color: "var(--color-primary-300)",
            }}
            className="absolute top-2 left-2 bg-surface-800/80  rounded-sm p-2 hidden group-hover:block"
          >
            <Link
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleModalState(e);
              }}
              href=""
            >
              <Icon name="pin" />
            </Link>
          </motion.span>
        </>
      )}
      {/* Flash Item  */}
      <FlashItemImage
        id={id}
        readable_name={readable_name}
        public_url={public_url}
      />
    </li>
  );
}
