// React
// import { ViewTransition } from "@/ui/";
// Hyperink UI
// import { Heading } from "@hyperinkstudio/ui-react-next/components";

export default function AboutPage() {
  return (
    // <ViewTransition transition="nav-forward">
      <div>
        <h1 >About</h1>
        <p>About the business</p>

        <section>
          {/* <Suspense
            fallback={
              <ViewTransition exit="slide-down" default="none">
                <PhotographerListSkeleton />
              </ViewTransition>
            }
          >
            <ViewTransition enter="slide-up" default="none">
              <PhotographerList />
            </ViewTransition>
          </Suspense> */}
        </section>
      </div>
    {/* </ViewTransition> */}
  );
}
