"use client";
import { Select } from "@hyperink/ui-react/components";
import { DocItems } from "../_components/DocItems";
import { docs } from "./data";
import { useState } from "react";

const options = [
  {
    label: "Tattoo",
    value: "tattoo",
  },
  {
    label: "Flash",
    value: "flash",
  },
];

export default function InputPage() {
  const [state, setState] = useState("on click placeholder!");
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
            <Select label="With two options" options={options} />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              desc="This is a place to select. Here is my description!"
              label="With a description"
              options={options}
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              options={options}
              error="here is an error"
              label="With error"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select options={options} disabled={true} label="Disabled" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              options={options}
              label="With Placeholder"
              placeholder="placeholder"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              required={true}
              options={options}
              label="this is required, bro"
              placeholder="placeholder"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              dir="row"
              options={options}
              label="this is a row"
              placeholder="this is a row"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              dir="row"
              options={options}
              wrapperGapUtilClassName="gap-8"
              label="using wrapper gap-8"
              placeholder="using wrapper gap"
              desc="hi hi hi! whats up?"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Select
              dir="col"
              options={options}
              wrapperAlignUtilClassName="justify-center items-center"
              label="wrapper align col"
              labelClassName="text-center"
              desc="using wrapper alignment class on a column"
            />
            <Select
              options={options}
              label="using an onClick"

              onClick={() => setState("you clicked the select input!")}
            />
            {state}
          </div>
        </div>
      </div>
    </div>
  );
}
