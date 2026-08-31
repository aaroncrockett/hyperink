"use client";
// Next
import { useSearchParams, useRouter } from "next/navigation";
// Hyperink
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";
// Local
import { BookingForm } from "./_components/BookingForm";
import { HyperInkSignature } from "../_components/HyperInkSignature";

const formCls =
  "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start";

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
      <div className="flex flex-col justify-between h-full gap-6">
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
