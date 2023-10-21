import { CSSProperties } from "react";
import { Getters } from "@globalTypes/shared.types";

export const themeVariantsNames = ["mainTheme", "secondaryTheme"] as const;
export const colorNames = [
  "red",
  "black",
  "white",
  "white_50",
  "background",
  "text",
  "text_addition",

  "sidebar_selected",
  "sidebar_grayedOut",
  "sidebar_breakdown_line",

  "tiles_hover",
  "list_background",

  "card_hover",

  "logo_template",

  "midnight_blue_200",
  "midnight_blue_300",
  "midnight_blue_500",
  "midnight_blue_700",
] as const;

export const typographyNames = [
  "paragraph",
  "subtitle_2",
  "button_normal",
] as const;

const typographyTypes = ["p", "span", "h1", "h2", "h3", "h4", "h5"] as const;

export type ColorNames = (typeof colorNames)[number];
export type ThemeName = (typeof themeVariantsNames)[number];
export type HexColor = `#${string}`;

export type PaletteType = Getters<ColorNames, HexColor>;

export type TypographyName = (typeof typographyNames)[number];

export type TypographyTypes = (typeof typographyTypes)[number];

export type TypographyVariants = { [key in TypographyName]: TypographyTypes };

export type TypographyType = Getters<TypographyName, CSSProperties>;

export type Theme = {
  palette: PaletteType;
  typography: TypographyType;
};

export type Palette = Pick<Theme, "palette">;

export type ThemeVariants = { [key in Partial<ThemeName>]: Theme };
