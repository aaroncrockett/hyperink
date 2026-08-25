import {
  Brain,
  Dock,
  DoorOpen,
  Home,
  Info,
  LogIn,
  Upload,
  Settings,
  Tag,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@hyperinkstudio/utils";
import { signup } from "@/app/(public)/login/actions";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  dock: Dock,
  doorOpen: DoorOpen,
  home: Home,
  info: Info,
  login: LogIn,
  upload: Upload,
  signup: LogIn,
  settings: Settings,
  tag: Tag,
  zap: Zap,
};

type Sizes = "sm" | "md" | "lg";

type IconProps = {
  name: string;
  size?: Sizes;
  cls?: string;
};

const sizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function Icon({ name, size = "md", cls }: IconProps) {
  const Icon = icons[name];

  if (!Icon) return null;

  return <Icon className={cn(sizes[size], cls)} />;
}
