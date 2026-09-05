import Image from "next/image";
//
import { Heading } from "@hyperinkstudio/ui-react-next/components";

export function VenmoCash() {
  return (
    <div className="flex flex-col gap-2 bg-surface-100-900/60 p-4 rounded-xl">
      <Heading cls="text-center" fontFaceCls="display" as="h3">
        VENMO/CASHAPP
      </Heading>
      <span className="pl-4 pb-2 text-sm">
        Please note, you might know my last name as
        <span className="font-bold"> Crockett</span>. My Venmo and Cash App are
        still under my previous last name,{" "}
        <span className="font-bold"> Happe</span>.
      </span>

      <div className="flex bg-surface-200/60 items-center rounded p-2 ">
        <div className="w-1/6">
          <Image
            src="/images/venmo-logo.webp"
            alt="Venmo Logo"
            width={50}
            height={50}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="w-5/6">
          <span className="bg-surface-200/60 p-3 rounded flex flex-wrap">
            <strong className="pr-2">@Aaron-Happe </strong>
            https://venmo.com/u/Aaron-Happe
          </span>
        </div>
      </div>

      <div className="flex bg-surface-200/20 items-center rounded p-2 ">
        <div className="w-1/6">
          <Image
            src="/images/cash-app-logo.webp"
            alt="Cash App Logo"
            width={50}
            height={50}
            className="w-10 h-10 object-contain"
          />
        </div>

        <div className="w-5/6">
          <span className="bg-surface-200/60 p-3 rounded flex flex-wrap">
            <strong className="pr-2">$aaromichaelhappe</strong>
            cash.app/$aaromichaelhappe
          </span>
        </div>
      </div>
    </div>
  );
}
