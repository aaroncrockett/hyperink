"use client";

import { motion } from "motion/react";
import { cn } from "@hyperinkstudio/utils";

type MenuButtonProps = {
  open: boolean;
  menuIconColor?: string;
};

export function AnimatedMenuIcon({
  open,
  menuIconColor = "bg-primary-500",
}: MenuButtonProps) {
  return (
    <span className="relative flex size-10 items-center justify-center">
      <span className={cn("relative flex h-5 w-6 flex-col justify-between")}>
        <motion.span
          className={cn(
            "absolute left-0 top-0 h-0.5 w-full origin-center",
            menuIconColor,
          )}
          animate={open ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        <motion.span
          className={cn(
            "absolute left-0 top-[47%] h-0.5 w-full",
            menuIconColor,
          )}
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.15,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className={cn(
            "absolute bottom-0 left-0 h-0.5 w-full origin-center bg-primary-500",
            menuIconColor,
          )}
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
