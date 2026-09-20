"use client";
import { Input } from "@hyperink/ui-react/components";
import { div } from "motion/react-client";
import { useState } from "react";

export default function InputPage() {
  const [state, setState] = useState("on click placeholder");
  return (
    <div className="flex flex-col gap-4 mb-12">
      <p>Inputs</p>

      <div className="gap-3 grid grid-cols-2 docs">
        <div className="bg-secondary-100-900/40 p-4 rounded text-surface-950-50">
          <p className="font-bold">DOCS</p>
          <ul className="flex flex-col gap-1">
            <li>desc?: A description</li>
            <li>descClassName?: adds to description classes</li>
            <li>descUtilClassName?: overrides description</li>
            <li>defaultValue?: a default value</li>
            <li>
              dir?: &quot; row &quot; OR &quot; col &quot;: Deterlines if flex
              col or row is used. Also affects wrapper gap and alignments
            </li>
            <li>disabled?: boolean;</li>
            <li>errorClassName?: adds to error class anem</li>
            <li>errorUtilClassName?: overrides error classes</li>
            <li>error?: string error message</li>
            <li>id?: string;</li>
            <li>
              inputUtilClassName?: overrides input classes (className is on
              props, and adds to the input classes);
            </li>
            <li>label?: string;</li>
            <li>labelClassName?: adds to lavel classes</li>
            <li>labelUtilClassName?: overrides label classes</li>
            <li>name?: string;</li>
            <li>placeholder?: string;</li>
            <li>readOnly?: boolean;</li>
            <li>required?: boolean;</li>
            <li>
              textColorUtilClassName?: overrides text color for all text colors
              except placeholder and descrtion. If you want to override a
              specific text color, use !important and pass in as a className
            </li>
            <li>type?: React.HTMLInputTypeAttribute;</li>
            <li>value?: string;</li>
            <li>
              wrapperAlignUtilClassName?: overrides alignment classes. This is
              needed in isolation because the alignment is computed based on the
              layout prop
            </li>
            <li>
              wrapperGapUtilClassName?: overrides gap classes. Gap is needed in
              isolation because the gap is computed based on the layout prop
            </li>
            <li>wrapperClassName?: adds to wrapper classes</li>
            <li>wrapperUtilClassName?: overrides wrapper classes</li>
            <li>...props are applied to the Input element</li>
          </ul>
          <div></div>
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
