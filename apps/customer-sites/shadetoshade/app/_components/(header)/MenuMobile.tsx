"use client";
import { ReactNode } from "react";
import { Dialog, Portal } from "@skeletonlabs/skeleton-react";
import { Menu, XIcon } from "lucide-react";

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

export default function MenuMobile({ className, children }: MenuMobileProps) {
  return (
    <div className={className}>
      <Dialog>
        <Dialog.Trigger>
          <Menu className="drop-shadow-xs" />
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop
            className={`fixed inset-0 z-50 bg-surface-700-300/50 ${animBackdrop}`}
          />
          <Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
            <Dialog.Content
              className={`h-screen  w-sm shadow-sm relative ${animModal}`}
            >
              <div className="h-full p-4 noise-bg-opac-0pt8">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-2xl font-bold">
                    SHADE TO SHADE
                  </Dialog.Title>
                  <Dialog.CloseTrigger className="btn-icon">
                    <XIcon />
                  </Dialog.CloseTrigger>
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
