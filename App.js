import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorDetail from "./src/components/Tutor/TutorDetail";
import Tutor from "./src/components/Tutor/Tutor";
import LoginScreen from "./src/components/Authentication/Login/LoginScreen";
import SignupScreen from "./src/components/Authentication/Signup/SignupScreen";
import ScheduleScreen from "./src/components/Schedule/ScheduleScreen";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScheduleScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tutor"
            component={Tutor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TutorDetail"
            component={TutorDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
