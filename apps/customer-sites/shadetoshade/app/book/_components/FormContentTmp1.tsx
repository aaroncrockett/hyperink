"use client";
// React
import { useState } from "react";
// Next
import { useRouter } from "next/navigation";

// Hyperink
import { cn } from "@hyperinkstudio/utils";
import { Form } from "@hyperinkstudio/ui-react-next/components";

type FormContentProps = {
  className?: string;
  flashId?: string | null;
};

export function FormContentTmp1({ className, flashId }: FormContentProps) {
  const [showForm, setShowForm] = useState(Boolean(flashId));

  const router = useRouter();

  function handleCustom() {
    setShowForm(true);
  }

  function handleFlash() {
    router.push("/flash");
  }

  if (!showForm) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <p>Are you looking for Flash or Custom?</p>

        <button
          className="btn preset-filled-secondary-500 w-1/2"
          onClick={handleFlash}
        >
          Flash
        </button>

        <button
          className="btn preset-filled-secondary-500 w-1/2"
          onClick={handleCustom}
        >
          Custom
        </button>
      </div>
    );
  }

  if (showForm) {
    return (
      <Form className={cn(className)}>
        <p>children later</p>
      </Form>
    );
  }
}
