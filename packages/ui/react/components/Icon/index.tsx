import { ComponentPropsWithoutRef } from "react";
import {
  Brain,
  Edit,
  Dock,
  DoorOpen,
  Home,
  Info,
  LogIn,
  LogOut,
  Pin,
  Upload,
  Settings,
  Tag,
  User,
  XIcon,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@hyperink/utils";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  dock: Dock,
  doorOpen: DoorOpen,
  edit: Edit,
  home: Home,
  info: Info,
  login: LogIn,
  logout: LogOut,
  pin: Pin,
  upload: Upload,
  signup: LogIn,
  settings: Settings,
  tag: Tag,
  user: User,
  close: XIcon,
  zap: Zap,
};

const sizes = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
  xl: "w-8 h-8",
};

type Sizes = keyof typeof sizes;

type IconProps = ComponentPropsWithoutRef<LucideIcon> & {
  color?: string;
  fillColor?: string;
  name: keyof typeof icons;
  size?: Sizes;
  useFill?: boolean;
};

export function Icon({
  color = "currentColor",
  fillColor = "currentColor",
  name,
  size = "md",
  useFill = false,
  ...props
}: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      {...(useFill ? { fill: fillColor } : {})}
      color={color}
      className={cn(sizes[size], props.className)}
      {...props}
    />
  );
}
