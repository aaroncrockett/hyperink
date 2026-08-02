import { cn } from "@hyperinkstudio/utils";
import Image from "next/image";
import Link from "next/link";

type HyperInkSignatureProps = {
  layoutCls?: string;
  textAlign?: string;
};

export function HyperInkSignature({
  layoutCls = "flex flex-col items-center",
  textAlign = "text-center",
}: HyperInkSignatureProps) {
  return (
    <p className={cn(layoutCls, textAlign)}>
      Powered by{" "}
      <Link href="#" className="inline-flex items-center gap-2 text-lg">
        <Image
          src="/images/hyperink-icon-logo.svg"
          alt="Hyper Ink"
          width={100}
          height={100}
          className="w-8 h-auto"
        />
        <span>
          <span className="font-bold">Hyper Ink</span> - Tattoo Booking
        </span>
      </Link>
    </p>
  );
}
