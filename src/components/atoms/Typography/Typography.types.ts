import { CSSProperties } from "react";
import { ColorNames, TypographyName } from "@styles/theme.types";

export type TypographyProps = {
  variant?: TypographyName;
  color?: ColorNames;
  style?: CSSProperties;
};
