"use client";
// Next
import { useSearchParams } from "next/navigation";
// Hyperink
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";
// Local
import { FormContentTmp1 } from "./_components/FormContentTmp1";
import { HyperInkSignature } from "../_partials/HyperInkSignature";

const formCls =
  "flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start";

export default function BookPage() {
  const searchParams = useSearchParams();
  const flashId = searchParams.get("flashId");

  return (
    <Page>
      <div className="flex flex-col  gap-6 justify-between h-full">
        <Heading alignment="text-center" as="h2" text="Tattoo Request Form" />
        <FormContentTmp1 flashId={flashId} className={formCls} />
        <HyperInkSignature />
      </div>
    </Page>
  );
}
