import { create } from "@storybook/theming/create";
import logoURL from "../public/atg.svg";
// import "../public/fonts/SUIT/SUIT-Variable.css";

export default create({
  base: "light",
  // Typography
  fontBase: "SUIT Variable",
  fontCode: "monospace",

  brandTitle: "ATG Design System",
  brandUrl: "https://atg.co.kr",
  brandImage: logoURL,
  brandTarget: "_self",

  //
  colorPrimary: "#1D2087",
  colorSecondary: "#1D2087",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#1D2087",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#000000",
  barSelectedColor: "#1D2087",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
