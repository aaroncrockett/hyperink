import { cn } from "@/utils/cn";

const cls = "card p-4 space-y-4 ";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className={cn(cls)}>{children}</div>;
}
