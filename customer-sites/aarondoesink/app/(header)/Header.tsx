import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  type: "desktop" | "mobile";
};

const headerComponentProps = {
  desktop: {
    cls: "",
    wrapperCls: "",
    logoImgCls: "",
  },
  mobile: {
    cls: "",
    wrapperCls: "",
    logoImgCls: "",
  },
};

export default function Header({
  children,
  type,
  className,
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
          "flex items-center justify-between max-w-6xl mx-auto w-full p-2 lg:p-4",
          headerComponentProps[type].wrapperCls,
        )}
      >
        <div>{children}</div>

        <Image
          src="/images/logo-text.webp"
          alt="Aaron Does Ink - Logo"
          width={201}
          height={40}
          className={headerComponentProps[type].logoImgCls}
        />

        <button className="btn bg-primary-500">BookNow</button>
      </div>
    </header>
  );
}
