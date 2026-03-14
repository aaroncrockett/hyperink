import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  type: "desktop" | "mobile";
  lead?: ReactNode;
  tail?: ReactNode;
  closeIcon?: ReactNode;
};

const headerComponentProps = {
  desktop: {
    cls: "",
    wrapperCls: "",
    leadImgCls: "",
  },
  mobile: {
    cls: "",
    wrapperCls: "",
    leadImgCls: "",
  },
};

export default function Header({
  children,
  type,
  className,
  lead,
  tail,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "shadow sticky top-0 z-10",
        headerComponentProps[type].cls,
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-between max-w-6xl mx-auto w-full p-2 lg:p-4 shadow-2xs",
          headerComponentProps[type].wrapperCls,
        )}
      >
        {lead}
        <div>{children}</div>

        {tail}
      </div>
    </header>
  );
}
