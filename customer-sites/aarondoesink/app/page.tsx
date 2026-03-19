import Page from "@/ui/page";
import Heading from "@/ui/heading";

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4">
        <Heading
          image={{
            src: "/images/pdx-tatt-artist.webp",
            width: 1540,
            height: 275,
            className: "w-[94%] sm:w-2/3 h-auto mx-auto",
          }}
          text="PDX Tattoo Artist"
          className="w-auto h-full"
        ></Heading>
        <Heading
          as="h2"
          text="Flash & custom tattoos"
          className="uppercase text-center font-bold text-xl [@media(min-width:20rem)]:text-2xl [@media(min-width:26rem)]:text-3xl  [@media(min-width:36rem)]:text-4xl [@media(min-width:60rem)]:text-5xl [@media(min-width:80rem)]:text-6xl "
        ></Heading>
      </section>
    </Page>
  );
}
