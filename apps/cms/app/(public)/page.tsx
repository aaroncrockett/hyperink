// Hyperink UI
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
export default function Home() {
  return (
    <div>
      <div className="bg-tertiary-500 pt-1 pb-1">
        <div className=" bg-surface-500/95">
          <div className="max-w-275 mx-auto flex flex-col items-center justify-center  py-8 p-4 lg:py-12 md:p7-10 text-lg space-y-5">
            <Heading
              as="h1"
              text="Artist Owned, Artist Made: Tattoo Booking"
              h1Size="text-5xl md:text-6xl lg:text-7xl"
              h1TextAtrs="leading-[3rem] text-4xl md:text-5xl lg:textd-6xl md:leading-[3.5rem] lg:leading-[4.25rem] lg:leading-[4.75rem]"
              alignmentCls="text-center"
              colorCls="text-primary-500"
            />

            <Heading
              as="h3"
              text="Helps tattoo artists manage their booking requests, clients, client details, deposits, and payments."
              alignmentCls="text-center"
              weightCls="font-normal"
              fontCls="serif"
              colorCls="text-tertiary-100-900"
            />
            <Heading
              as="h5"
              alignmentCls="text-center"
              weightCls="font-normal"
              colorCls="text-surface-950-50"
              cls="pt-3 w-2/3"
            >
              <span className="font-bold text-2xl md:text-2xl text-secondary-800-200">
                Looking for artists
              </span>{" "}
              who want to use the app during testing, and you will get the extra
              special hook-up for life.
            </Heading>
          </div>
        </div>
      </div>

      <Page>
        <div className="text-center flex flex-col space-y-4">
          <div className="flex flex-col justify-center text-center text-lg space-y-3 card bg-surface-100-900 p-4 pb-5 md:p-5 md:pb-6 lg:p-6 lg:pb-8 rounded-xl">
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
          <div className="flex flex-col justify-center text-center text-lg space-y-3 card bg-surface-100-900 p-4 pb-5 md:p-5 md:pb-6 lg:p-6 lg:pb-8 rounded-xl">
            <span className="text-2xl serif font-normal">
              Free for artists. Affordable for clients.
            </span>

            <span className="font-bold">
              Upload and sell your flash at no cost to you.
            </span>
            <span className="font-bold">
              Other apps charge your clients 10%+ per transaction while spending
              a ton on marketing. We keep our costs low. While pricing details
              are still being finalized, we will be charging{" "}
              <span className="font-bold">*at least*</span> 2% less for
              equivalent or better functionality.
            </span>
          </div>
          <div className="flex flex-col justify-center text-center text-lg space-y-3 card bg-surface-100-900 p-4 pb-5 md:p-5 md:pb-6 lg:p-6 lg:pb-8 rounded-xl">
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
