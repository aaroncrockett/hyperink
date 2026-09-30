"use client";
import { InputCheck } from "@hyperink/ui-react/components";
import { DocItems } from "../_components/DocItems";
import { docs } from "./data";

export default function InputCheckPage() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <p>Inputs</p>

      <div className="gap-3 grid grid-cols-2 docs">
        <div className="bg-secondary-100-900/40 p-4 rounded text-surface-950-50">
          <p className="font-bold">DOCS</p>
          <DocItems items={docs} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-surface-950-50">Examples</p>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <InputCheck label="ipnut check basic" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <InputCheck labelOrder="before" label="ipnut check before align" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <InputCheck error="WRONG" label="ipnut check w/ error" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <InputCheck
              labelOrder="before"
              error="WRONG, AGAIN! BUDDY."
              label="ipnut check w/ error before align"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
