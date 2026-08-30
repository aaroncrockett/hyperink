"use client";
// 3rd party
import { Portal } from "@skeletonlabs/skeleton-react";
//
import { AnimatePresence, motion } from "motion/react";
// Next
import Link from "next/link";
import Image from "next/image";
// React
import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils";
// Local @'s
import { INTERNAL_FLASH_LINKS } from "@/consts";
import { Icon } from "@/ui";
// Local

import { useFlashItemMenu, usePinnedModal } from "../_hooks";
import { FlashItemMenu } from "./FlashItemMenu";
import { PinnedModal } from "./PinnedModal";

type FlashItemProps = ComponentPropsWithoutRef<"li"> & {
  readable_name: string;
  id: string;
  publicUrl: string;
  pinned_order: number | null;
  collection: string;
};

export function FlashItem({
  readable_name,
  id,
  publicUrl,
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
      {/* modal and menu states */}
      <AnimatePresence mode="wait" initial={false}>
        {modalState && (
          <Portal>
            <PinnedModal
              pinned_order={pinned_order}
              readable_name={readable_name}
              id={id}
              publicUrl={publicUrl}
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
            className="absolute top-2 right-2 bg-surface-800/80 rounded-xl p-2 hidden group-hover:block gap-2"
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
            className="absolute top-2 left-2 bg-surface-800/80  rounded-xl p-2 hidden group-hover:block"
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
      <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded-xl">
        <Image
          src={publicUrl}
          alt={`${readable_name ?? ""} - flash image`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto shadow"
        />

        <p className="text-3xl text-center font-display text-surface-800-200">
          {readable_name}
        </p>
      </div>
    </li>
  );
}
