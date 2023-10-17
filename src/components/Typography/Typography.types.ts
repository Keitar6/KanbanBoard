import { ColorNames, TypographyName } from "@styles/theme.types";
import { CSSProperties } from "react";

export type TypographyProps = {
  variant?: TypographyName;
  color?: ColorNames;
  style?: CSSProperties;
};
