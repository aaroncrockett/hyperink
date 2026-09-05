"use client";
import { Accordion } from "@skeletonlabs/skeleton-react";
//
import dynamic from "next/dynamic";
//
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
//
import { Icon } from "@/ui/Icon";

// import { ChevronDownIcon } from "lucide-react";

import { CreditCard } from "./_components/CreditCard";
import { VenmoCash } from "@/app/_components/VenmoCash";
import { Contact } from "./_components/Contact";

const componentMap = {
  newClientInfo: dynamic(() => import("./_components/NewClientInfo")),
  returnClientInfo: dynamic(() => import("./_components/ReturnClientInfo")),
};

const items = [
  {
    id: "newClientInfo",
    title: "First Time Clients",
    component: componentMap.newClientInfo,
  },
  {
    id: "returnClientInfo",
    title: "Returning Clients",
    component: componentMap.returnClientInfo,
  },
];
export default function ThankYou() {
  const newClientItem = items.find((item) => item.id === "newClientInfo");
  const returnClientItem = items.find((item) => item.id === "returnClientInfo");

  const NewClientComponent = newClientItem?.component;
  const ReturnClientComponent = returnClientItem?.component;

  return (
    <Page cls="main-padding">
      <div className="mb-4 flex flex-col gap-2">
        <div className="grid w-fit mx-auto grid-cols-[auto_1fr_auto] items-center md:gap-3 gap-2">
          <span>🔥🖤</span>

          <Heading cls="text-center" as="h1">
            Thanks for Reaching Out!
          </Heading>

          <span>🖤🔥</span>
        </div>

        <p className="text-secondary-500 font-bold text-lg md:text-xl flex items-center justify-center text-center">
          I&apos;ll reach out to schedule in a couple days.
          <br />
        </p>
      </div>
      <div className="flex flex-col md:gap-6 gap-4">
        <Accordion collapsible>
          <Accordion.Item value={items[0].id}>
            <div className="bg-surface-200-800/40 rounded-xl p-4 flex flex-col gap-2">
              <Accordion.ItemTrigger className="font-bold flex items-center justify-between gap-2">
                <Heading as="h2"> {items[0].title} </Heading>

                <Accordion.ItemIndicator className="group">
                  <Icon
                    name="downIndicator"
                    cls="transition group-data-[state=open]:rotate-180"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
            </div>
            <Accordion.ItemContent>
              {NewClientComponent && <NewClientComponent />}
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value={items[1].id}>
            <div className="bg-surface-200-800/40 rounded-xl p-4 flex flex-col gap-2">
              <Accordion.ItemTrigger className="font-bold flex items-center justify-between gap-2">
                <Heading as="h2"> {items[1].title} </Heading>

                <Accordion.ItemIndicator className="group">
                  <Icon
                    name="downIndicator"
                    cls="transition group-data-[state=open]:rotate-180"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
            </div>
            <Accordion.ItemContent>
              {ReturnClientComponent && <ReturnClientComponent />}
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion>
        {/* <div className="bg-surface-200-800/40 rounded-xl p-4 flex flex-col gap-2">
            <Heading as="h2">Returning Clients</Heading>{" "}
   
          </div> */}
        <div className="bg-secondary-100-900/40 rounded p-4 flex flex-col gap-2 justify-center items-center">
          <CreditCard />
        </div>
        <div className="p-4 flex flex-col gap-2 justify-center items-center">
          <VenmoCash />
        </div>
        <div className="bg-secondary-100-900/40 rounded p-4 flex flex-col gap-2 justify-center items-center">
          <Contact />
        </div>
      </div>
    </Page>
  );
}
