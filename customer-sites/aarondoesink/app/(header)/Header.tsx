import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  lead?: ReactNode;
  tail?: ReactNode;
  closeIcon?: ReactNode;
  wrapperCls?: string;
};

export default function Header({
  children,
  className,
  wrapperCls,
  lead,
  tail,
  ...props
}: HeaderProps) {
  return (
    <header className={cn("shadow-md sticky top-0 z-10", className)} {...props}>
      <div
        className={cn(
          "flex items-center justify-between max-w-6xl mx-auto w-full p-2 lg:p-4 shadow-2xs",
          wrapperCls,
        )}
      >
        {lead}
        <div>{children}</div>

        {tail}
      </div>
      <div className="absolute bottom-[40px]- left-0 w-full pointer-events-none">
        <Image
          src="/images/header-bottom.png"
          alt="Header bottom decoration"
          width={4214}
          height={40}
          className="w-auto h-auto mx-auto block"
        />
      </div>
    </header>
  );
}
