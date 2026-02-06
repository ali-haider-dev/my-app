import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import RootStack from "./src/Navigation/StackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/Context/Auth";
import { PaymentProvider } from "./src/Context/payment";
import { useFonts } from "expo-font";
import {
  Poppins_200ExtraLight,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) return <Text>Loading...</Text>;
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthProvider>
            <PaymentProvider>
              <RootStack />
            </PaymentProvider>
          </AuthProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#ff0000"
            translucent
          />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
