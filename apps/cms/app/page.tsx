// Next
import Image from "next/image";
// Hyperink UI
import { Page, Heading } from "@hyperinkstudio/ui-react/components";
export default function Home() {
  return (
    <div>
      <div className=" bg-surface-500">
        <div className="flex flex-col items-center justify-center p-10  text-lg max-w-275 mx-auto space-y-5">
          <Heading
            as="h1"
            text="Tattoo Booking - Coming soon."
            h1Size="text-4xl md:text-5xl lg:text-6xl"
            alignment="text-center"
            color="text-primary-500"
          />

          <Heading
            as="h2"
            text="Helps tattoo artists manage their booking requests, clients, client details, deposits, and payments."
            alignment="text-center"
            weight="font-normal"
            fontCls="serif"
            color="text-tertiary-500"
          />
          <Heading
            as="h4"
            text="Looking for artists who want to use the app during testing, and you
            will get the extra special hook-up for life."
            alignment="text-center"
            weight="font-normal"
            fontCls="serif"
            color="text-surface-950-50"
          />
        </div>
      </div>

      <Page>
        <div className="text-center flex flex-col space-y-4ß∑">
          <div className="flex flex-col justify-center text-center text-lg space-y-2 card bg-surface-100-900 p-4 rounded-sm">
            <span className="text-2xl serif font-normal">
              Owned and built by an artist.
            </span>
            <span className="font-bold">
              A small business supporting small businesses.
            </span>
            <span className="font-bold">
              No AI. Fuck AI. Just real people available to answer your
              questions.
            </span>
          </div>
          <div className="flex flex-col justify-center text-center text-lg space-y-2 card bg-surface-100-900 p-4 rounded-sm">
            <span className="text-2xl serif font-normal">
              Free for artists. Affordable for clients.
            </span>

            <span className="font-bold">
              Upload and sell your flash at no cost to you.
            </span>
            <span className="font-bold">
              Other apps charge your clients 10%+ per transaction while spending
              a ton on marketing. We keep our costs low and charge only 6%
              percent on transations above $60, and up to 7% on transations
              under.
            </span>
          </div>
          <div className="flex flex-col justify-center text-center text-lg space-y-2 card bg-surface-100-900 p-4 rounded-sm">
            <span className="text-2xl serif font-normal">
              More tools. Less bullshit.
            </span>
            <span className="font-bold">
              Our paid version gives you an affordable way to manage your
              clients, tattoos, and records without paying for overpriced
              software.
            </span>
            <span className="font-bold">
              You own your data and your forms. Download it, or print it anytime
              for your records or your client. Your business information should
              belong to you, not the app you use.
            </span>
          </div>
        </div>
      </Page>
    </div>
  );
}
