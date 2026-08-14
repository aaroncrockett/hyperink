"use client";
// React &* related
import { ReactNode } from "react";
import { Menu, XIcon } from "lucide-react";
// Skeleton
import { Dialog, Portal } from "@skeletonlabs/skeleton-react";

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
  closeIcon = <XIcon />,
  triggerIcon = <Menu className="shadow-sm" />,
}: MenuMobileProps) {
  return (
    <div className={className}>
      <Dialog>
        <Dialog.Trigger>{triggerIcon}</Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop
            className={`fixed inset-0 z-50 bg-surface-500-/50 ${animBackdrop}`}
          />
          <Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
            <Dialog.Content
              className={`h-screen bg-primary-500/95 w-sm shadow-sm relative ${animModal}`}
            >
              <div className="h-full p-4">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="text-2xl font-bold">
                    {title}
                  </Dialog.Title>
                  <Dialog.CloseTrigger>{closeIcon}</Dialog.CloseTrigger>
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
