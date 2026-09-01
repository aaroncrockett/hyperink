// Hyperink UI
import { Page } from "@hyperinkstudio/ui-react-next/components";
// local
import { Header } from "./_components/(hp)/Header";
import { SubHeader } from "./_components/(hp)/SubHeader";
import { TattooDisplay } from "./_components/(hp)/TattooDisplay";

export default function Home() {
  return (
    <Page cls="main-padding flex flex-col gap-2 md:gap-4" sectional={true}>
      <section className="flex flex-col gap-2 md:gap-4 mt-2">
        <Header />
        <SubHeader />
      </section>
      <section className="grid w-full gap-2 md:gap-4 sm:grid-cols-2 grid-col-1">
        <TattooDisplay />
      </section>
    </Page>
  );
}
