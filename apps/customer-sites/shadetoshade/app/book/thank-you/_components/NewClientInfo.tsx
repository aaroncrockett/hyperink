import Link from "next/link";
//
import { Heading } from "@hyperinkstudio/ui-react-next/components";
//
import { INTERNAL_LINKS } from "@/consts";
export default function NewClientInfo() {
  return (
    <>
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
          👍 If you feel it is not a good fit, I will return $30 of the $40. If
          I feel it isn&apos;t a good fit I will return your entire fee.
        </li>
        <li>
          ✌️ If we go ahead with the tattoo, the fee will be applied to your
          total deposit of $100. For no-shows or breaking the
          <Link href={INTERNAL_LINKS.faq.href}>
            reschedule/cancelation
          </Link>{" "}
          policy, your fee will not be returned.
        </li>
        <li>
          🖤 I&apos;ll check in to see if you have any questions within a couple
          days. But I can not book a time until you have paid the booking fee.🖤
        </li>
      </ul>
    </>
  );
}
