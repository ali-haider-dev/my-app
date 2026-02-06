import { Dimensions } from "react-native";

export const { width } = Dimensions.get("window");
export const { height } = Dimensions.get("window");
export const BASE_URL = "https://express-api-black-kappa.vercel.app/api/auth";
export const Colors = {
  primary: "#0091CF",
  white: "#FFF",
  black: "#000",
  gray: "gray",
  green: "green",
  grey: "#d9d9d9",
};

export const FONT_FAMILY = {
  PoppinsThin100: "Poppins_100Thin",
  PoppinsThinItalic100: "Poppins_100Thin_Italic",
  PoppinsExtraLight200: "Poppins_200ExtraLight",
  PoppinsExtraLightItalic200: "Poppins_200ExtraLight_Italic",
  PoppinsLight300: "Poppins_300Light",
  PoppinsLightItalic300: "Poppins_300Light_Italic",
  PoppinsRegular400: "Poppins_400Regular",
  PoppinsItalic: "Poppins_400Regular_Italic",
  PoppinsMedium500: "Poppins_500Medium",
  PoppinsMediumItalic500: "Poppins_500Medium_Italic",
  PoppinsSemiBold600: "Poppins_600SemiBold",
  PoppinsSemiBoldItalic600: "Poppins_600SemiBold_Italic",
  PoppinsBold700: "Poppins_700Bold",
  PoppinsBoldItalic700: "Poppins_700Bold_Italic",
  PoppinsExtraBold800: "Poppins_800ExtraBold",
  PoppinsExtraBoldItalic800: "Poppins_800ExtraBold_Italic",
  PoppinsBlack900: "Poppins_900Black",
  PoppinsBlackItalic900: "Poppins_900Black_Italic",
};
