// Next
import Image from "next/image";
// Hyperink UI
import { Page, Heading } from "@hyperinkstudio/ui-react/components";
export default function Home() {
  return (
    <div>
      <div className=" bg-surface-500">
        <div className="flex flex-col items-center justify-center p-4 gap-2 text-lg max-w-275 mx-auto">
          <Heading
            as="h1"
            text="Tattoo Booking - Coming soon."
            h1TextSize="text-4xl md:text-5xl lg:text-6xl"
            weight=""
            color="text-primary-500"
          />

          <Heading
            as="h4"
            text="Helps tattoo artists manage their booking requests, clients, client details, deposits, and payments."
            weight="font-normal"
            fontCls="serif"
            color="text-primary-500"
          />
          <p className="text-lg ">
            Helps tattoo artists manage their booking requests, clients, client
            details, deposits, and payments.
          </p>
          <div className="text-center">
            <p>Owned *and* made by an artist.</p>
            <p>Small business for small business.</p>
            <p>No AI. Actual people to answer your questions.</p>
            <p>
              Free option for artists. Affordable for your clients. Upload and
              sell your flash for free.
            </p>
            <p>
              Paid (and affordable) option -- for keeping track of all of your
              clients and tattoos. YOU own your data. You can download it or
              print it at anytime. Great for Oregon which requires a paper
              copy.{" "}
            </p>
          </div>
        </div>
        <div className="bg-primaryh-500">
          <p>
            Looking for artists who want to use the app during testing, and you
            will get the extra special hook-up for life.
          </p>
        </div>
      </div>

      <Page>
        <div className=" p-4 "> wtf?</div>
      </Page>
    </div>
  );
}
