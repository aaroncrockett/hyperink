import { Page, Heading } from "@hyperinkstudio/ui-react/components/client";
import Gallery from "@/ui/gallery/";
import { getImages } from "./index";

export default async function Tattoos() {
  return (
    <Page>
      <Heading as="h2" text="Tattoos"></Heading>
      <Gallery getImages={getImages} />
    </Page>
  );
}
