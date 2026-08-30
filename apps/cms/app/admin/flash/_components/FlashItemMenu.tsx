"use client";
//3rd party
import { motion } from "motion/react";
// next
import Link from "next/link";
// Local @'s
import { Icon } from "@/ui";
// Local
import { INTERNAL_FLASH_LINKS } from "@/consts";

type FlashItemMenuProps = {
  id: string;
  handleModalState: (e: React.MouseEvent) => void;
};

export function FlashItemMenu({ id, handleModalState }: FlashItemMenuProps) {
  return (
    <motion.span
      key="flash-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 bg-surface-950-50/90 flex flex-col gap-4 justify-center items-center rounded-xl"
    >
      <motion.span
        className="absolute top-[12%] right-[12%]"
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
      >
        <Link
          onClick={(e) => e.stopPropagation()}
          href={`${INTERNAL_FLASH_LINKS.flash.href}/${id}`}
          className="text-lg md:text-xl underline text-center font-bold flex gap-3 items-center justify-center"
        >
          <Icon name="edit" />
          Edit Flash
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
      >
        <Link
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleModalState(e);
          }}
          href={`${INTERNAL_FLASH_LINKS.flash.href}/${id}`}
          className="text-lg md:text-xl underline text-center font-bold flex gap-3 items-center justify-center"
        >
          <Icon name="pin" />
          Pin Flash
        </Link>
      </motion.span>
    </motion.span>
  );
}
