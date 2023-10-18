import { Getters } from "@globalTypes/shared.types";

const routeFeature = ["dashboard", "boards", "profile", "search"] as const;

type RouteFeature = (typeof routeFeature)[number];

type RoutesUrl = `/${RouteFeature}`;

type RoutesData = Getters<RouteFeature, RoutesUrl>;

const routes: RoutesData = {
  dashboard: "/dashboard",
  boards: "/boards",
  profile: "/profile",
  search: "/search",
} as const;

export default routes;
