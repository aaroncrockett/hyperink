"use client";

import { Toast, createToaster } from "@skeletonlabs/skeleton-react";

export const toaster = createToaster({
  overlap: true,
});

export function Toaster() {
  return (
    <Toast.Group toaster={toaster}>
      {(toast) => (
        <Toast key={toast.id} toast={toast}>
          <Toast.Message>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Message>

          <Toast.CloseTrigger />
        </Toast>
      )}
    </Toast.Group>
  );
}
