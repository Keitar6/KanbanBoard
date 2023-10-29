import { Getters, UppercaseFirstLetter } from "@globalTypes/shared.types";
import { IconName } from "@components/atoms/Icon/icon.types";
import routes from "@routing/routes";

export const sidebarLinks = [
  "dashboard",
  "boards",
  "profile",
  "search",
] as const;

export type SidebarItemLabel = (typeof sidebarLinks)[number];

type ItemToIcon = Getters<SidebarItemLabel, IconName>;
type ItemToLabel = { [k in SidebarItemLabel]: UppercaseFirstLetter<k> };
type ItemToLink = { [k in SidebarItemLabel]: (typeof routes)[k] };

const variantToIcon: ItemToIcon = {
  dashboard: "dashboard",
  boards: "boards",
  profile: "profile",
  search: "search",
} as const;

const variantToLabel: ItemToLabel = {
  dashboard: "Dashboard",
  boards: "Boards",
  profile: "Profile",
  search: "Search",
} as const;

const variantToLink: ItemToLink = {
  dashboard: "/dashboard",
  boards: "/boards",
  profile: "/profile",
  search: "/search",
} as const;

export const sidebarItemInfo = {
  link: variantToLink,
  icon: variantToIcon,
  label: variantToLabel,
};
