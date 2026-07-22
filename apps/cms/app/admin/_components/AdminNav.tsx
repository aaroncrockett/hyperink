"use client";

import Link from "next/link";
import { LINKS_ADMIN_LIST } from "@/app/consts";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 p-4 bg-surface-200-800 h-full text-sm">
      {LINKS_ADMIN_LIST.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`block rounded px-3 py-2 transition-colors ${
              pathname === href
                ? "bg-surface-300-700"
                : "hover:bg-surface-400-600"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
