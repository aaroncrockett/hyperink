// Hyperink UI
import { Page } from "@hyperinkstudio/ui-react-next/components";
// local
import { Header } from "./_components/(hp)/Header";
import { SubHeader } from "./_components/(hp)/SubHeader";
import { TattooDisplay } from "./_components/(hp)/TattooDisplay";

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4">
        <Header />
        <SubHeader />
      </section>
      <section className="grid gap-2 grid-cols-2 w-full h-full">
        <TattooDisplay />
      </section>
    </Page>
  );
}
