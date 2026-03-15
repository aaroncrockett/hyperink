import Page from "@/ui/page";
import Heading from "@/ui/heading";

export default function Home() {
  return (
    <div>
      <Page>
        <Heading
          image={{
            src: "/images/pdx-tatt-artist.webp",
            width: 1540,
            height: 275,
            className: "w-full h-auto",
          }}
          text="PDX Tattoo Artist"
          className="w-auto h-full"
        ></Heading>
        <Heading
          as="h2"
          text="Flash & custom tattoos"
          className="text-2xl uppercase text-center font-bold"
        ></Heading>
      </Page>
    </div>
  );
}
