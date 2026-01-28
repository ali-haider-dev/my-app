import {Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');
export const {height} = Dimensions.get('window');

export const Colors = {
  primary: '#0091CF',
  white: '#FFF',
  black: '#000',
  gray: 'gray',
  green: 'green',
  grey: '#d9d9d9',
};

// fonts.ts
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export const FONT_FAMILY = {
  PoppinsThin100: Poppins_100Thin,
  PoppinsThinItalic100: Poppins_100Thin_Italic,
  PoppinsExtraLight200: Poppins_200ExtraLight,
  PoppinsExtraLightItalic200: Poppins_200ExtraLight_Italic,
  PoppinsLight300: Poppins_300Light,
  PoppinsLightItalic300: Poppins_300Light_Italic,
  PoppinsRegular400: Poppins_400Regular,
  PoppinsItalic: Poppins_400Regular_Italic,
  PoppinsMedium500: Poppins_500Medium,
  PoppinsMediumItalic500: Poppins_500Medium_Italic,
  PoppinsSemiBold600: Poppins_600SemiBold,
  PoppinsSemiBoldItalic600: Poppins_600SemiBold_Italic,
  PoppinsBold700: Poppins_700Bold,
  PoppinsBoldItalic700: Poppins_700Bold_Italic,
  PoppinsExtraBold800: Poppins_800ExtraBold,
  PoppinsExtraBoldItalic800: Poppins_800ExtraBold_Italic,
  PoppinsBlack900: Poppins_900Black,
  PoppinsBlackItalic900: Poppins_900Black_Italic,
};
