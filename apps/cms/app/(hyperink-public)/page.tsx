import { cn } from "@hyperink/utils";
//
import { Page, PageSection } from "@hyperink/ui-react/components";

const pCls =
  "text-center xl:w-1/2 md:w-2/3 w-4/5 text-lg font-bold leading-7 md:leading-8 mx-auto px-2 text-surface-50-950";

export default function Home() {
  return (
    <Page sectional={true} className="bg-surface-900-100">
      <div className="bg-secondary-500 h-4"></div>
      <div
        className="bg-cover bg-center bg-fixed w-full"
        style={{
          backgroundImage: "url('/images/hp/hp-intro.webp')",
        }}
      >
        <PageSection
          gapCls="gap-3"
          marginCls="mx-auto"
          paddingCls="md:py-22 py-18"
          useWrapper={true}
        >
          <h1 className="px-2 pb-2 font-display-secondary font-normal text-primary-500 text-4xl md:text-5xl text-center leading-11 md:leading-15">
            Artist Owned, Artist Made:
            <br /> Tattoo Booking
          </h1>
          <p className={cn(pCls)}>
            Created by an artist to solve real-world problems.
          </p>
          <p className={cn(pCls)}>
            Early volunteers can have input into how the app develops{" "}
            <br className="sm:hidden" /> and share their ideas.
          </p>
          <p className="pt-6 md:pt-8 font-display-secondary! text-primary-200! text-3xl md:text-4xl text-center leading-10">
            100% Free.
          </p>
          <p className={cn(pCls)}>
            Using the booking form to checkout flash or a custom tattoo is 100%
            free.
          </p>
          <p className={cn(pCls)}>
            If you choose to use the credit card checkout, or want to use
            advanced features, we offer flexible payment options.
          </p>
        </PageSection>
      </div>

      <div className="bg-secondary-500 h-4"></div>
      <PageSection
        marginCls="mx-auto"
        paddingCls="py-12 md:py-16 px-4 md:px-6"
        useWrapper={true}
        wrapperClassName="bg-surface-800"
      >
        <h2 className="font-bold! text-tertiary-500 text-4xl lg:text-5xl text-center leading-12 md:leading-15">
          No AI. And no future enshitification.
        </h2>
        <p className={cn(pCls)}>
          Real people to answer your questions, not AI Bots.
        </p>
        <p className={cn(pCls)}>
          Filler text, y&rsquo;all. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo
          eget magna fermentum iaculis eu non diam. Aenean sed enim vel sem
          consequat tincidunt. Curabitur vitae nunc sed velit dignissim sodales
          ut eu sem. Donec pretium vulputate sapien nec sagittis aliquam
          malesuada bibendum. Vestibulum morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Nunc sed blandit libero volutpat sed cras ornare
          arcu. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames. Mauris in aliquam sem fringilla ut morbi tincidunt augue
          interdum. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
          enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque
          fermentum. Tellus molestie nunc non blandit massa enim nec dui nunc.
          At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
          eget. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
          Elementum sagittis vitae et leo duis ut diam quam nulla. Nibh tellus
          molestie nunc non blandit massa enim nec.
        </p>
      </PageSection>
    </Page>
  );
}
