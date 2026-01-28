import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import HomeStack from './stacks/HomeStack';
// import ProfileStack from './stacks/ProfileStack';
import HomeScreen from "../Screens/Home";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60, // height of the tab bar
          paddingBottom: 5, // padding at the bottom
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          fontWeight: "bold", 
          color: "black",
        },
        tabBarActiveTintColor: "#ff4d4d", 
        tabBarInactiveTintColor: "gray", 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={30} color={color} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}
