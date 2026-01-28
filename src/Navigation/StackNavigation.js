import * as React from "react";
import { View, Text,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./BottomNavigation";
import AuthScreen from "../Screens/Auth";
import { useAuth } from "../Context/Auth";
import BooksScreen from "../Screens/Books";
import GamesScreen from "../Screens/Games";
import Merchandise from "../Screens/Merchandise";

import { FONT_FAMILY } from "../constants";
import { CustomHeader } from "../Components/CustomHeader";


const Stack = createNativeStackNavigator();

function RootStack() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/icon1.png")}
          style={{ width: 200, height: 200 }}
          contentFit="contain"
        />
        <Text style={{ fontSize: 24, fontFamily: FONT_FAMILY.PoppinsBlack900 }}>
          ContentHub
        </Text>
      </View>
    );
  }
  return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
  {!user ? (
     <>
    <Stack.Screen name="Auth" component={AuthScreen} />


     </>
  ) : (
    <>
      <Stack.Screen name="HomeTabs" component={AppTabs} />
      
      {/* Books Screen */}
      <Stack.Screen
        name="books"
        component={BooksScreen}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Books" backgroundColor="#8b5cf6" />,
        }}
      />

      {/* Games Screen */}
      <Stack.Screen
        name="games"
        component={GamesScreen}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Games" backgroundColor="#10b981" />,
        }}
      />

      {/* Merchandise Screen */}
      <Stack.Screen
        name="merchandise"
        component={Merchandise}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Merchandise" backgroundColor="#f59e0b" />,
        }}
      />
    </>
  )}
</Stack.Navigator>
  );
}

export default RootStack;
