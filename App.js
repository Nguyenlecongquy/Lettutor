import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorDetail from "./src/components/Tutor/TutorDetail";
import Tutor from "./src/components/Tutor/Tutor";
import LoginScreen from "./src/components/Authentication/Login/LoginScreen";
import SignupScreen from "./src/components/Authentication/Signup/SignupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Log in" }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen
          name="Tutor"
          component={Tutor}
          options={{ title: "List Tutor" }}
        />
        <Stack.Screen
          name="TutorDetail"
          component={TutorDetail}
          options={{ title: "Tutor Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
