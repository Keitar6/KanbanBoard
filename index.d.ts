import type { Theme } from "@styles/theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
