"use client";

import { motion } from "motion/react";
import { cn } from "@hyperink/utils";

type MenuButtonProps = {
  open: boolean;
  menuIconColor?: string;
};

export function AnimatedMenuIcon({
  open,
  menuIconColor = "bg-primary-500",
}: MenuButtonProps) {
  return (
    <span className="relative flex justify-center items-center size-10">
      <span className="relative flex flex-col justify-between w-6 h-5">
        <motion.span
          className={cn(
            "top-0 left-0 absolute w-full h-0.5 origin-center",
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
            "top-[47%] left-0 absolute w-full h-0.5",
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
            "bottom-0 left-0 absolute bg-primary-500 w-full h-0.5 origin-center",
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
