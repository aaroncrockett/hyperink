"use client";
// Next
import { useSearchParams, useRouter } from "next/navigation";
// Hyperink
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";
// Local
import { BookingForm } from "./_components/BookingForm";
import { HyperInkSignature } from "../_components/HyperInkSignature";

export default function BookPage() {
  const searchParams = useSearchParams();
  const flashId = searchParams.get("flashId");
  const flashName = searchParams.get("flashName");

  const router = useRouter();

  function clearFlashUrlParams() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("flashId");
    params.delete("flashName");

    router.replace(`?${params.toString()}`);
  }

  return (
    <Page cls="main-padding">
      <div className="flex flex-col h-full gap-2">
        <Heading
          alignmentCls="text-center"
          as="h2"
          text="Tattoo Request Form"
        />
        <BookingForm
          clearFlashUrlParams={clearFlashUrlParams}
          flashName={flashName ?? ""}
          flashId={flashId ?? ""}
        />
        <HyperInkSignature />
      </div>
    </Page>
  );
}
