import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorDetail from "./src/components/Tutor/TutorDetail";
import Tutor from "./src/components/Tutor/Tutor";
import LoginScreen from "./src/components/Authentication/Login/LoginScreen";
import SignupScreen from "./src/components/Authentication/Signup/SignupScreen";
import ForgotPasswordScreen from "./src/components/Authentication/Login/ForgotPasswordScreen";
import ScheduleScreen from "./src/components/Schedule/ScheduleScreen";
import HistoryScreen from "./src/components/History/HistoryScreen";
import ListCoursesScreen from "./src/components/ListCourses/ListCoursesScreen";
import CourseDetailScreen from "./src/components/ListCourses/CourseDetailScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
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
          <Stack.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListCoursesScreen"
            component={ListCoursesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
