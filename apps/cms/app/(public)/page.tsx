import Image from "next/image";
// Hyperink UI
import { PageSection } from "@hyperinkstudio/ui-react-next/components";
// Local UI
import { Page, Heading } from "@/ui";

import { ViewTransition } from "@/ui/";

export default function Home() {
  return (
    <ViewTransition transition="nav-forward">
      <Page wrapperBgColorCls="bg-surface-900!" sectional={true}>
        <div className="h-4 bg-secondary-500"></div>
        <PageSection
          marginCls="mx-auto"
          paddingCls="md:py-22 py-18"
          wrapperBgColorCls="bg-surface-700"
          useWrapper={true}
        >
          <Heading
            as="h1"
            h1Size="text-5xl md:text-6xl"
            h1TextAtrs="leading-15 md:leading-18 font-display-secondary!"
            textColorCls="!text-primary-500"
            alignmentCls="text-center"
            cls="px-2 py-1"
          >
            Artist Owned, Artist Made: Tattoo Booking
          </Heading>
          <p className="text-center xl:w-1/2 md:w-2/3 w-4/5 text-secondary-50! text-xl! font-bold leading-8 mx-auto px-2 py-1">
            Created by an artist to solve real-world problems. Early volunteers
            can have input into how the app develops and share their ideas.
          </p>
          <Image
            width="1322"
            height="739"
            alt="tattoing image"
            src="/hp/hp-intro.webp"
          />
        </PageSection>
        <div className="h-4 bg-secondary-500"></div>
        <PageSection
          marginCls="mx-auto"
          wrapperBgColorCls="bg-surface-800"
          useWrapper={true}
          paddingCls="py-12 md:py-16"
        >
          <Heading
            as="h2"
            h2Size="text-4xl lg:text-5xl "
            h2TextAtrs="leading-12 md:leading-15"
            alignmentCls="text-center"
          >
            No AI. And no future enshitification.
          </Heading>
          <p className="text-center xl:w-1/2 md:w-2/3  text-xl! font-bold leading-8 mx-auto">
            Real people to answer your questions, not AI Bots.
          </p>
        </PageSection>
      </Page>
    </ViewTransition>
  );
}
