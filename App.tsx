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
} from "@expo-google-fonts/poppins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_500Medium,
    Poppins_900Black,
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
