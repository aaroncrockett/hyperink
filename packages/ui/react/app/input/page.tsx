"use client";
import { Input } from "@hyperink/ui-react/components";
import { DocItems } from "../_components/DocItems";
import { docs } from "./data";
import { useState } from "react";

export default function InputPage() {
  const [state, setState] = useState("on click placeholder");
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
            <Input
              desc="This is a place to input. Here is my description!"
              label="with description"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input error="here is an error" label="with error" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              error="here is an error"
              desc="This is a place to input. Here is my description!"
              label="with error and description"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input disabled={true} label="disabed" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input label="placeholder" placeholder="placeholder" />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              required={true}
              label="this is required, bro"
              placeholder="placeholder"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              dir="row"
              label="this is a row"
              placeholder="this is a row"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              dir="row"
              wrapperGapUtilClassName="gap-6"
              label="using wrapper gap"
              placeholder="using wrapper gap"
              desc="hi hi hi! whats up?"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              dir="row"
              wrapperAlignUtilClassName="justify-end"
              label="wrapper align"
              placeholder="using wrapper alignment class"
              desc="hi hi hi! whats up?"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              dir="col"
              wrapperAlignUtilClassName="justify-center items-center"
              label="wrapper align col"
              desc="using wrapper alignment class on a column"
            />
          </div>
          <div className="bg-secondary-300-700/10 p-4 rounded">
            <Input
              dir="col"
              label="using an onClick"
              placeholder={state}
              onClick={() => setState("you clicked the input")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
