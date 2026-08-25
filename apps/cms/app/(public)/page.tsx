// Hyperink UI
import { PageSection } from "@hyperinkstudio/ui-react-next/components";
// Local UI
import { Page, Heading } from "@/ui";

import { ViewTransition } from "@/ui/";

export default function Home() {
  return (
    <ViewTransition transition="nav-forward">
      <Page wrapperBgColorCls="bg-page-surface" sectional={true}>
        <div className="h-4 bg-primary-500"></div>
        <PageSection
          marginCls="mx-auto"
          paddingCls="md:py-28 py-20"
          wrapperBgColorCls="bg-secondary-500"
          useWrapper={true}
        >
          <Heading
            as="h1"
            h1Size=" text-6xl md:text-7xl"
            h1TextAtrs="leading-18 md:leading-22"
            textColorCls="!text-primary-500"
            alignmentCls="text-center"
            cls="px-2 py-1"
          >
            Artist Owned, Artist Made: Tattoo Booking
          </Heading>
          <p className="text-center xl:w-1/2 md:w-2/3 text-surface-50! text-2xl! font-bold leading-9 mx-auto px-2 py-1">
            Created by an artist to solve real-world problems. Early volunteers
            can have input into how the app develops and share their ideas.
          </p>
        </PageSection>
        <div className="h-4 bg-primary-500"></div>
        <PageSection
          marginCls="mx-auto"
          wrapperBgColorCls="bg-surface-600"
          useWrapper={true}
          paddingCls="py-12 md:py-16"
        >
          <Heading
            as="h2"
            h2Size="text-5xl lg:text-6xl "
            h2TextAtrs="leading-14 md:leading-18"
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
