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
import { TattooItemImage } from "./TattooItemImage";
//
import { INTERNAL_TATTOOS_LINKS } from "@/data/links";
import { Icon } from "@hyperink/ui-react/components";

import { useTattooItemMenu, usePinnedModal } from "../_hooks";
import { TattooItemMenu } from "./TattooItemMenu";
import { PinnedModal } from "./PinnedModal";

type TattooItemProps = ComponentPropsWithoutRef<"li"> & {
  pinned_order: number | null;
  public_url: string;
  title: string;
  id: string;
};

export function TattooItems({
  title,
  public_url,
  pinned_order,
  id,
  ...props
}: TattooItemProps) {
  const { modalState, handleModalState } = usePinnedModal();
  const { menuState, handleTattooItemClick } = useTattooItemMenu();

  return (
    <li
      className={cn("group cursor-pointer", props.className)}

      onClick={(e) => {
        handleTattooItemClick();
        props.onClick?.(e);
      }}
    >
      {/* modal and menu states */}
      <AnimatePresence mode="wait" initial={false}>
        {modalState && (
          <Portal>
            <PinnedModal
              pinned_order={pinned_order}
              title={title}
              id={id}
              public_url={public_url}

              handleModalState={(e) => handleModalState(e)}
            />
          </Portal>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        {menuState && (
          <TattooItemMenu
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
            className="absolute top-2 right-2 bg-surface-800/80 rounded p-2 hidden group-hover:block gap-2"
          >
            <Link
              onClick={(e) => e.stopPropagation()}
              href={`${INTERNAL_TATTOOS_LINKS.tattoos.href}/${id}`}
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
            className="absolute top-2 left-2 bg-surface-800/80  rounded p-2 hidden group-hover:block"
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

      <TattooItemImage title={title} public_url={public_url} />
    </li>
  );
}
