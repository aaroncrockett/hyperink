import type { ComponentPropsWithoutRef } from "react";
//
import { HeaderShell } from "../(header)/HeaderShell";
import { cn } from "@hyperink/utils";
import { Toaster } from "../Toaster";

type BodyProps = ComponentPropsWithoutRef<"body"> & {
  isSignedIn: boolean;
};

export function Body({ children, className, isSignedIn }: BodyProps) {
  return (
    <body className={className}>
      <div className={cn("grid grid-rows-[auto_1fr] mx-auto min-h-screen")}>
        <HeaderShell isSignedIn={isSignedIn} />
        {children}
        <Toaster />
      </div>
    </body>
  );
}
