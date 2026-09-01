// 3rd party
import { AnimatePresence, motion } from "motion/react";
// react
import { useState } from "react";
// next
import Image from "next/image";
// hyperink
import { capitalizeWords } from "@hyperinkstudio/utils";
// Local @'s
import { INTERNAL_LINKS } from "@/consts";
//
import { Icon } from "@/ui";
//
import { FlashMenu } from "./FlashMenu";

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
      <motion.div
        whileHover="hover"
        className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded-xl relative cursor-pointer group "
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuState && (
            <FlashMenu
              setMenuState={setMenuState}
              readable_name={readable_name}
              id={id}
              handleBookFlash={handleBookFlash}
            />
          )}
        </AnimatePresence>
        <span className="absolute top-5 left-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100 md:opacity-0 ">
          <Icon color="var(--color-secondary-200)" size="xl" name="book" />
        </span>
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
      </motion.div>
    </div>
  );
}
