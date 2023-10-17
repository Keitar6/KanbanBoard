import { FC, PropsWithChildren } from "react";
import { ThemeName } from "@styles/theme.types";
import { ThemeProvider } from "styled-components";
import { THEMES_VARIANTS } from "../../styles/themeVariants";

export const ThemeWrapper: FC<
  PropsWithChildren<{ themeVariant?: ThemeName }>
> = ({ children, themeVariant = "mainTheme" }) => (
  <ThemeProvider theme={THEMES_VARIANTS[themeVariant]}>
    {children}
  </ThemeProvider>
);
