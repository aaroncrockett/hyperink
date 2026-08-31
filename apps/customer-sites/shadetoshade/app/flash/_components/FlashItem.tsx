//3rd party
import { AnimatePresence, motion } from "motion/react";
//
import { useState } from "react";
//
import Image from "next/image";
// Local @'s
import { Icon } from "@/ui";
import { capitalizeWords } from "@hyperinkstudio/utils";
//
import { INTERNAL_LINKS } from "@/consts";

type FlashItemProps = {
  id: string;
  readable_name: string;
  publicUrl: string;
};

export function FlashItem({ id, readable_name, publicUrl }: FlashItemProps) {
  const [menuState, setMenuState] = useState(false);
  const handleBookFlash = (id: string, name: string) => {
    const params = new URLSearchParams();

    params.set("flashId", id);
    params.set("flashName", name);

    window.location.href = `${INTERNAL_LINKS.book.href}?${params.toString()}`;
  };
  return (
    <div onClick={() => setMenuState(true)}>
      <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded-xl relative">
        <AnimatePresence mode="wait" initial={false}>
          {menuState && (
            <motion.span
              key="flash-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-surface-950-50/90 flex flex-col gap-4 justify-center items-center rounded-xl"
            >
              <motion.span
                className="absolute top-5 right-5"
                initial={{ color: "var(--color-surface-200)" }}
                whileHover={{
                  color: "var(--color-primary-100)",
                }}
                whileTap={{
                  color: "var(--color-primary-100)",
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
              <button
                onClick={() => handleBookFlash(id, readable_name)}
                className="preset-filled-primary-500 btn "
              >
                Book Flash
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuState(false);
                }}
                className="preset-filled-surface-500 btn"
              >
                Cancel
              </button>
            </motion.span>
          )}
        </AnimatePresence>

        <Image
          src={publicUrl}
          alt={`${readable_name} - flash image`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto shadow"
        />

        <p className="text-lg text-center font-display text-surface-800-200">
          {capitalizeWords(readable_name)}
        </p>
      </div>
    </div>
  );
}
