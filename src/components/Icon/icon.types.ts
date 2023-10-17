import { Getters } from "@globalTypes/shared.types";
import { ColorNames, HexColor } from "@styles/theme.types";

export const iconsNames = [
  "dashboard",
  "boards",
  "profile",
  "search",
  "edit",
  "trashBin",
  "plus",
  "gear",
  "acmeLogo",
] as const;

export type IconName = (typeof iconsNames)[number];

type Path = {
  d: string;
  id: string;
  isPathFill?: boolean;
  strokeWidth?: string;
  isMask?: boolean;
};

type Mask = {
  path: Path[];
  fill: HexColor;
};

export type IconItem = {
  viewBox: string;
  path: Path[];
  mask?: Mask;
};

export type IconList = Getters<IconName, IconItem>;

export type IconProps = {
  name: IconName;
  color: ColorNames;
  size: number;
  isActive: boolean;
  activeColor?: ColorNames | undefined;
};
