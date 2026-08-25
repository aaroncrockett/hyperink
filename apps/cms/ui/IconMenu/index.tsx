"use client";

import { motion } from "motion/react";

type MenuButtonProps = {
  open: boolean;
};

export function IconMenu({ open }: MenuButtonProps) {
  return (
    <span className="relative flex size-10 items-center justify-center">
      <span className="relative flex h-5 w-6 flex-col justify-between">
        <motion.span
          className="absolute left-0 top-0 h-px w-full origin-center bg-primary-500"
          animate={open ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        <motion.span
          className="absolute left-0 top-1/2 h-px w-full bg-primary-500"
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.15,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="absolute bottom-0 left-0 h-px w-full origin-center bg-primary-500"
          animate={open ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </span>
    </span>
  );
}
