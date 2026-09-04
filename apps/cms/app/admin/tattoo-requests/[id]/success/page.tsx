import Link from "next/link";
import { Icon } from "@/ui";
import { Page, Heading } from "@/ui";
import { INTERNAL_ADMIN_LINKS } from "@/consts";

export function Success() {
  return (
    <Page cls="mx-auto">
      <Heading as="h2">Success!</Heading>A tattoo and client have been created
      from the tattoo request.
      <Link
        className="flex flex-row gap-2 md:gap-4"
        href={INTERNAL_ADMIN_LINKS.admin.href}
      >
        <Icon name={INTERNAL_ADMIN_LINKS.admin.icon} />{" "}
        {INTERNAL_ADMIN_LINKS.admin.name}
      </Link>
    </Page>
  );
}
