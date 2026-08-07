"use client";
// React
import { useState } from "react";
// Next
import { useRouter } from "next/navigation";

// Hyperink
import { cn } from "@hyperinkstudio/utils";
import { Form } from "@hyperinkstudio/ui-react-next/components";
import { TattooTypeOptions } from "@hyperinkstudio/helpers";

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
        <p>
          Are you looking for {TattooTypeOptions[0].label} or{" "}
          {TattooTypeOptions[1].label}?
        </p>

        <button
          className="btn preset-filled-secondary-500 w-1/2"
          onClick={handleFlash}
        >
          {TattooTypeOptions[0].label}
        </button>

        <button
          className="btn preset-filled-secondary-500 w-1/2"
          onClick={handleCustom}
        >
          {TattooTypeOptions[1].label}
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
