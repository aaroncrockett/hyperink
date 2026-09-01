import { motion } from "motion/react";
// Local @'s
import { Icon } from "@/ui";

type FlashMenuProps = {
  id: string;
  readable_name: string;

  setMenuState: (value: boolean) => void;
  handleBookFlash: (id: string, readableName: string) => void;
};

export function FlashMenu({
  id,
  readable_name,
  setMenuState,
  handleBookFlash,
}: FlashMenuProps) {
  return (
    <motion.span
      key="flash-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute inset-0 z-10 bg-surface-950-50/90 flex flex-col gap-4 justify-center items-center rounded-xl"
    >
      <motion.span
        className="absolute top-5 right-5"
        initial={{ color: "var(--color-surface-200)" }}

        whileHover={{
          color: "var(--color-primary-100)",
          y: -1,
          scale: 1.015,
        }}
        whileTap={{
          color: "var(--color-primary-100)",
          scale: 1.02,
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setMenuState(false);
          }}
        >
          <Icon size="xl" name="close" />
        </div>
      </motion.span>
      <motion.button
        onClick={() => handleBookFlash(id, readable_name)}
        initial={{ background: "var(--color-primary-500)", scale: 1 }}
        whileHover={{
          background: "var(--color-primary-400)",
          y: -1,
          scale: 1.015,
        }}
        whileTap={{
          background: "var(--color-primary-400)",
          scale: 1.02,
        }}
        transition={{ duration: 0.01 }}
        className="btn rounded-xl text-white! font-bold pb-2"
      >
        <span>Book Flash</span>
      </motion.button>
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          setMenuState(false);
        }}
        transition={{ duration: 0.01 }}
        initial={{ background: "var(--color-surface-500)", scale: 1 }}
        whileHover={{
          background: "var(--color-surface-400)",
          y: -1,
          scale: 1.015,
        }}
        whileTap={{
          background: "var(--color-surface-400)",
          scale: 1.02,
        }}
        className="btn btn-sm rounded-xl text-white! font-bold pb-1.5"
      >
        Cancel
      </motion.button>
      <div className="mt-2">
        <p className="display text-lg md:text-xl text-surface-50-950 text-center">
          * Flash *
        </p>
        <p className="display text-2xl md:text-3xl text-surface-50-950 text-center">
          Flash: {readable_name}
        </p>
      </div>
    </motion.span>
  );
}
