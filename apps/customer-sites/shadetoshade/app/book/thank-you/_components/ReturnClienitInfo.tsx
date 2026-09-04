import Link from "next/link";
export function ReturnClientInfo() {
  return (
    <ul className="flex flex-col gap-1.5">
      <li>
        🖤🖤🖤 Returning clients should pay the entire $100 deposit. Reminder:
        Custom Tattoos, have an addition drawing fee.🖤🖤🖤
      </li>
      <li>
        See the <Link href="">FAQ</Link>
      </li>
    </ul>
  );
}
