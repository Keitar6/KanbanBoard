import { Getters } from "@globalTypes/shared.types";

const routeFeature = [
  "dashboard",
  "boards",
  "profile",
  "search",
  "settings",
] as const;

type RouteFeature = (typeof routeFeature)[number];

export type RoutesUrl = `/${RouteFeature}`;

type RoutesData = Getters<RouteFeature, RoutesUrl>;

const routes: RoutesData = {
  dashboard: "/dashboard",
  boards: "/boards",
  profile: "/profile",
  search: "/search",
  settings: "/settings",
} as const;

export default routes;
