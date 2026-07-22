"use client";
import { Page, Heading } from "@hyperinkstudio/ui-react/components/client";

import dynamic from "next/dynamic";
import { Accordion } from "@skeletonlabs/skeleton-react";
import { ChevronDownIcon } from "lucide-react";
import { Fragment } from "react";

const COMPONENTS = {
  Pricing: dynamic(() => import("./Pricing")),
  Booking: dynamic(() => import("./Booking")),
  Aftercare: dynamic(() => import("./Aftercare")),
} as const;

type ComponentKey = keyof typeof COMPONENTS;

const items: { id: string; title: string; component: ComponentKey }[] = [
  { id: "pricing", title: "Pricing", component: "Pricing" },
  { id: "booking", title: "Booking", component: "Booking" },
  { id: "aftercare", title: "Aftercare", component: "Aftercare" },
];

export default function FAQ() {
  return (
    <Page>
      <Heading as="h2" text="FAQ" />

      <Accordion collapsible>
        {items.map((item, i) => {
          const Component = COMPONENTS[item.component];

          return (
            <Fragment key={item.id}>
              {i !== 0 && <hr className="hr" />}

              <Accordion.Item value={item.id}>
                <h3 className="text-2xl">
                  <Accordion.ItemTrigger className="font-bold flex items-center justify-between gap-2">
                    {item.title}
                    <ChevronDownIcon className="h-5 w-5 transition group-data-[state=open]:rotate-180" />
                  </Accordion.ItemTrigger>
                </h3>

                <Accordion.ItemContent>
                  <div className="prose">
                    <Component />
                  </div>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Fragment>
          );
        })}
      </Accordion>
    </Page>
  );
}
