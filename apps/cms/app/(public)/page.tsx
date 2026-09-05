import Image from "next/image";
// Hyperink UI
import { PageSection } from "@hyperinkstudio/ui-react-next/components";
// Local UI
import { Page, Heading, ViewTransition } from "@/ui";

import { cn } from "@hyperinkstudio/utils";

const pCls =
  "text-center xl:w-1/2 md:w-2/3 w-4/5 text-lg! font-bold leading-7 md:leading-8 mx-auto px-2 ";
const lightText = "text-secondary-50!";
const darkText = "text-secondary-950!";

export default function Home() {
  return (
    <ViewTransition transition="nav-forward">
      <Page sectional={true} wrapperBgColorCls="bg-surface-900!">
        <div className="h-4 bg-secondary-500"></div>
        <div
          className="w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/hp/hp-intro.webp')",
          }}
        >
          <PageSection
            marginCls="mx-auto"
            paddingCls="md:py-22 py-18"
            wrapperBgColorCls="bg-secondary-500/40 "
            useWrapper={true}
            gapCls="gap-3"
          >
            <Heading
              as="h1"
              h1Size="md:text-5xl text-4xl"
              h1TextAtrs="leading-11 md:leading-15 font-display-secondary!"
              textColorCls="!text-primary-500"
              alignmentCls="text-center"
              cls="px-2 pb-2"
            >
              Artist Owned, Artist Made:
              <br /> Tattoo Booking
            </Heading>
            <p className={cn(pCls, lightText)}>
              Created by an artist to solve real-world problems.
            </p>
            <p className={cn(pCls, lightText)}>
              Early volunteers can have input into how the app develops{" "}
              <br className="sm:hidden" /> and share their ideas.
            </p>
            <p className="text-primary-200! text-3xl md:text-4xl pt-6 md:pt-8 leading-10 font-display-secondary! text-center">
              100% Free.
            </p>
            <p className={cn(pCls, lightText)}>
              Using the booking form to checkout flash or a custom tattoo is
              100% free.
            </p>
            <p className={cn(pCls, lightText)}>
              If you choose to use the credit card checkout, or want to use
              advanced features, we offer flexible payment options.
            </p>
          </PageSection>
        </div>

        <div className="h-4 bg-secondary-500"></div>
        <PageSection
          marginCls="mx-auto"
          wrapperBgColorCls="bg-surface-800"
          useWrapper={true}
          paddingCls="py-12 md:py-16 px-4 md:px-6"
        >
          <Heading
            as="h2"
            h2Size="text-4xl lg:text-5xl "
            h2TextAtrs="leading-12 md:leading-15 font-bold!"
            alignmentCls="text-center"
          >
            No AI. And no future enshitification.
          </Heading>
          <p className={cn(pCls, lightText)}>
            Real people to answer your questions, not AI Bots.
          </p>
          <p className={cn(pCls, lightText)}>
            Filler text, y&rsquo;all. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer vitae justo eget magna fermentum iaculis eu
            non diam. Aenean sed enim vel sem consequat tincidunt. Curabitur
            vitae nunc sed velit dignissim sodales ut eu sem. Donec pretium
            vulputate sapien nec sagittis aliquam malesuada bibendum. Vestibulum
            morbi blandit cursus risus at ultrices mi tempus imperdiet. Nunc sed
            blandit libero volutpat sed cras ornare arcu. Aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames. Mauris in
            aliquam sem fringilla ut morbi tincidunt augue interdum. Eget lorem
            dolor sed viverra ipsum nunc aliquet bibendum enim. Facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum. Tellus
            molestie nunc non blandit massa enim nec dui nunc. At ultrices mi
            tempus imperdiet nulla malesuada pellentesque elit eget. Viverra
            accumsan in nisl nisi scelerisque eu ultrices vitae. Elementum
            sagittis vitae et leo duis ut diam quam nulla. Nibh tellus molestie
            nunc non blandit massa enim nec.
          </p>
        </PageSection>
      </Page>
    </ViewTransition>
  );
}
