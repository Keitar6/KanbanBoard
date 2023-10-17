import { Theme, ThemeVariants } from "./theme.types";

const mainTheme: Theme = {
  palette: {
    white: "#ffffff",
    white_50: "#E7E6EC80",
    black: "#000000",
    red: "#D61C1C",

    background: "#F4F7FE",
    text: "#001C39",
    text_addition: "#88819F",

    sidebar_selected: "#007DFC",
    sidebar_grayedOut: "#B7BEC5",

    list_background: "#ECF1FD",
  },
  typography: {
    subtitle_2: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "18px",
    },
    paragraph: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "18px",
    },
    button_normal: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
};
const secondaryTheme: Theme = {
  palette: {
    white: "#ffffff",
    white_50: "#E7E6EC80",
    black: "#000000",
    red: "#D61C1C",

    background: "#F4F7FE",
    text: "#001C39",
    text_addition: "#88819F",

    sidebar_selected: "#007DFC",
    sidebar_grayedOut: "#B7BEC5",

    list_background: "#ECF1FD",
  },
  typography: {
    subtitle_2: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "18px",
    },
    paragraph: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "18px",
    },
    button_normal: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
};

export const THEMES_VARIANTS: ThemeVariants = {
  mainTheme,
  secondaryTheme,
};
