import Link from "next/link";
import { Heading } from "@hyperinkstudio/ui-react-next/components";
import { INTERNAL_LINKS } from "@/consts";
import { Icon } from "@/ui";

const user = "shade.to.shade.art";
const domain = "gmail.com";
const minorProtection = `${user}@${domain}`;

export function Contact() {
  return (
    <>
      <div className="grid w-fit mx-auto grid-cols-[auto_1fr_auto] items-center md:gap-3 gap-2">
        <span>💅✨.</span>

        <Heading cls="text-center" textColorCls="text-secondary-500" as="h2">
          More info about me in the links below!
        </Heading>

        <span>✨💅</span>
      </div>
      <div className="p-4 text-center">
        <p className="display text-2xl md:text-3xl">
          Website chat coming soon.
        </p>
        <p>In the meantime feel free to reach out below or on social media:</p>
        <p>{minorProtection}</p>
      </div>

      <ul className="font-bold flex flex-col sm:flex-row gap-2 sm:gap-2 justify-around items-center md:gap-4 w-full">
        <li>
          <Link
            className="uppercase text-secondary-900-100 md:text-xl text-lg flex flex-row items-center gap-2 cursor-pointer hover:text-secondary-500"
            href={INTERNAL_LINKS.faq.href}
          >
            <Icon name="info" />
            {INTERNAL_LINKS.faq.name}
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-secondary-900-100 md:text-xl text-lg flex flex-row items-center gap-2 cursor-pointer hover:text-secondary-500"
            href={INTERNAL_LINKS.about.href}
          >
            <Icon name="user" />
            {INTERNAL_LINKS.about.name}
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-secondary-900-100 md:text-xl text-lg flex flex-row items-center gap-2 cursor-pointer hover:text-secondary-500"
            href="https://www.instagram.com/shadetoshade"
          >
            <Icon name="instagram" />
            Instagram
          </Link>
        </li>
      </ul>
    </>
  );
}
