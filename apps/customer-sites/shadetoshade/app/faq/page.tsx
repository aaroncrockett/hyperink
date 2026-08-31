"use client";
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";

import dynamic from "next/dynamic";
import { Accordion } from "@skeletonlabs/skeleton-react";
import { ChevronDownIcon } from "lucide-react";
import { Fragment } from "react";

const COMPONENTS = {
  Pricing: dynamic(() => import("./_components/Pricing")),
  Booking: dynamic(() => import("./_components/Booking")),
  Aftercare: dynamic(() => import("./_components/Aftercare")),
} as const;

type ComponentKey = keyof typeof COMPONENTS;

const items: { id: string; title: string; component: ComponentKey }[] = [
  { id: "pricing", title: "Pricing", component: "Pricing" },
  { id: "booking", title: "Booking", component: "Booking" },
  { id: "aftercare", title: "Aftercare", component: "Aftercare" },
];

export default function FAQPage() {
  return (
    <Page cls="main-padding">
      <Heading as="h2" text="FAQ" />

      <Accordion collapsible>
        {items.map((item, i) => {
          const Component = COMPONENTS[item.component];

          return (
            <Fragment key={item.id}>
              {i !== 0 && <hr className="hr" />}

              <Accordion.Item value={item.id}>
                <h3 className="text-2xl">
                  <Accordion.ItemTrigger className="flex items-center justify-between gap-2 font-bold">
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
