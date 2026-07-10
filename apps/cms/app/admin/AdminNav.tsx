"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/admin",
    label: "Admin Home",
  },
  {
    href: "/admin/create-client",
    label: "Create A Client",
  },
  {
    href: "/admin/create-tattoo-record",
    label: "Create a tattoo record",
  },
  {
    href: "/admin/upload-tattoo-images",
    label: "Upload tattoo images",
  },
  {
    href: "/admin/create-flash",
    label: "Create Flash",
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 p-4 bg-surface-100 h-full text-sm">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`block rounded px-3 py-2 transition-colors ${
              pathname === href ? "bg-surface-300" : "hover:bg-surface-200"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
