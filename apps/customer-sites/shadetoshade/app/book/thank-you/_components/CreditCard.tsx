import { Heading } from "@hyperinkstudio/ui-react-next/components";
export function CreditCard() {
  return (
    <>
      <div className="grid w-fit mx-auto grid-cols-[auto_1fr_auto] items-center md:gap-3 gap-2">
        <span>💅✨.</span>

        <Heading cls="text-center" textColorCls="text-secondary-500" as="h2">
          Credit card payment is coming soon!
        </Heading>

        <span>✨💅</span>
      </div>

      <p className="font-bold">
        In the meantime, here is my Venmo/Cash App info. You will also receive
        an email with this information.
      </p>
    </>
  );
}
