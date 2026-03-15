import { ReactNode } from "react";
import { Dialog, Portal } from "@skeletonlabs/skeleton-react";
import { Menu, XIcon } from "lucide-react";

type MenuMobileProps = {
  children: ReactNode;
  title?: ReactNode;
  closeIcon?: ReactNode;
  triggerIcon?: ReactNode;
};

const animBackdrop =
  "transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100";
const animModal =
  "transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0";

export default function MenuMobile({
  children,
  title = "",
  closeIcon = <XIcon />,
  triggerIcon = <Menu />,
}: MenuMobileProps) {
  return (
    <div>
      <Dialog>
        <Dialog.Trigger>
          {triggerIcon}
          <Portal>
            <Dialog.Backdrop
              className={`fixed inset-0 z-50 bg-surface-50-950/50 ${animBackdrop}`}
            />
            <Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
              <Dialog.Content
                className={`h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl ${animModal}`}
              >
                <div className="flex justify-between items-center">
                  <Dialog.Title className="text-2xl font-bold">
                    {title}
                  </Dialog.Title>
                  <Dialog.CloseTrigger className="btn-icon preset-tonal">
                    {closeIcon}
                  </Dialog.CloseTrigger>
                </div>
                {children}
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Trigger>
      </Dialog>
    </div>
  );
}
