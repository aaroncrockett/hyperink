"use client";
// React &* related
import { ReactNode } from "react";
// Skeleton
import { Dialog, Portal } from "@skeletonlabs/skeleton-react";
//
import { AnimatedMenuIcon } from "@hyperinkstudio/ui-react-next/components";

type MenuMobileProps = {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  closeIcon?: ReactNode;
  triggerIcon?: ReactNode;
};

const animBackdrop =
  "transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100";
const animModal =
  "transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0";

export default function MenuMobile({
  className,
  children,
  title = "",
}: MenuMobileProps) {
  return (
    <div className={className}>
      <Dialog>
        <Dialog.Context>
          {(dialog) => (
            <Dialog.Trigger>
              <AnimatedMenuIcon open={dialog.open} />
            </Dialog.Trigger>
          )}
        </Dialog.Context>
        <Portal>
          <Dialog.Backdrop
            className={`fixed inset-0 z-50 bg-surface-600-400/30 ${animBackdrop}`}
          />
          <Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
            <Dialog.Content
              className={`h-screen bg-secondary-500/95 sm:w-2/3 md:w-1/2 w-[80%] lg:hidden shadow-sm relative ${animModal}`}
            >
              <div className="h-full p-4">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-5xl  pb-5 text-primary-500 font-display ">
                    {title}
                  </Dialog.Title>
                </div>
                <Dialog.Context>
                  {(dialog) => (
                    <div
                      onClick={(event) => {
                        if ((event.target as HTMLElement).closest("a")) {
                          dialog.setOpen(false);
                        }
                      }}
                    >
                      {children}
                    </div>
                  )}
                </Dialog.Context>
              </div>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog>
    </div>
  );
}
