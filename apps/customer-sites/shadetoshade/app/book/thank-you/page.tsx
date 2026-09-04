import Image from "next/image";
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
export default function ThankYou() {
  return (
    <Page cls="main-padding">
      <div className="mb-4 flex flex-col gap-2">
        <Heading textColorCls="text-secondary-500 text-center" as="h1">
          <span className="text-2xl md:text-3xl ">🔥🖤 </span> &nbsp;Thanks for
          Reaching Out! &nbsp;
          <span className="text-2xl md:text-3xl">🖤🔥</span>
        </Heading>
        <p className="text-secondary-500 font-bold text-lg md:text-xl flex items-center justify-center text-center">
          I&apos;ll reach out to schedule in a couple days.
          <br />
        </p>
      </div>
      <div className="flex flex-col md:gap-6 gap-4">
        <div className="bg-surface-200-800/40 rounded-xl p-4 flex flex-col gap-2">
          <Heading as="h2">First Time Clients</Heading>
          <ul className="flex flex-col gap-1.5">
            <li>
              📢 You must purchase a{" "}
              <span className="font-bold">partly *refundable* $40</span>{" "}
              consultation to get a tattoo.
            </li>
            <li>
              💬 During the consoltation I will discuss the tattoo process and
              ensure we are a good fit.
            </li>
            <li>
              👍 If you feel it is not a good fit, I will return $30 of the $40.
              If I feel it isn&apos;t a good fit I will return your entire fee.
            </li>
            <li>
              If we go ahead with the tattoo, the fee will be applied to your
              total deposit of $100.
            </li>
            <li>
              ✌️ For no-shows or breaking the *reschedule/cancelation* policy,
              your fee will not be returned.
            </li>
            <li>
              🖤🖤🖤 I&apos;ll check in to see if you have any questions in a
              couple days. But I can not book a time until you have paid the
              booking fee.🖤🖤🖤
            </li>
          </ul>
        </div>
        <div className="bg-surface-200-800/40 rounded-xl p-4 flex flex-col gap-2">
          <Heading as="h2">Returning Clients</Heading>
          <p className="flex flex-col gap-1.5">
            🖤🖤🖤 Returning clients should pay the entire $100 deposit.
            Reminder: Custom Tattoos, have an addition drawing fee.🖤🖤🖤
          </p>
        </div>
        <div className="bg-secondary-100-900/40 rounded p-4 flex flex-col gap-2 justify-center items-center">
          <Heading cls="text-center" textColorCls="text-secondary-500" as="h2">
            💅✨. Credit card payment is coming soon! :D ✨💅
          </Heading>
          <p className="font-bold">
            In the meantime, here is my Venmo/Cash App info. You will also
            receive an email with this information.
          </p>
        </div>

        <p className="flex flex-col p-4">
          <span className="font-bold">
            Please note, you might know my last name as Crockett, which was
            changed after I was married to my husband Nick. My Venmo and Cash
            App are still under my previous last name, Happe.
          </span>
        </p>
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
        <div className="bg-secondary-100-900/40 rounded p-4 flex flex-col gap-2 justify-center items-center">
          <Heading cls="text-center" textColorCls="text-secondary-500" as="h2">
            💅✨. Please see my FAQ, About or social media for more! ✨💅
          </Heading>
          <p className="font-bold">... LINKS ...</p>
        </div>
      </div>
    </Page>
  );
}
