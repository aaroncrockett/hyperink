import {
  Book,
  Brain,
  ChevronDownIcon,
  Edit,
  Dock,
  DoorOpen,
  Home,
  Info,
  Instagram,
  LogIn,
  Pin,
  User,
  Upload,
  Settings,
  Tag,
  XIcon,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@hyperinkstudio/utils";

const icons: Record<string, LucideIcon> = {
  book: Book,
  brain: Brain,
  downIndicator: ChevronDownIcon,
  dock: Dock,
  doorOpen: DoorOpen,
  edit: Edit,
  home: Home,
  info: Info,
  instagram: Instagram,
  login: LogIn,
  pin: Pin,
  upload: Upload,
  user: User,
  signup: LogIn,
  settings: Settings,
  tag: Tag,
  close: XIcon,
  zap: Zap,
};

type Sizes = "sm" | "md" | "lg" | "xl";

type IconProps = {
  cls?: string;
  color?: string;
  fillColor?: string;
  name: keyof typeof icons;
  size?: Sizes;
  useFill?: boolean;
};

const sizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

export function Icon({
  cls,
  color = "currentColor",
  fillColor = "currentColor",
  name,
  size = "md",
  useFill = false,
}: IconProps) {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <Icon
      {...(useFill ? { fill: fillColor } : {})}
      color={color}
      className={cn(sizes[size], cls)}
    />
  );
}
