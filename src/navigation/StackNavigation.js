import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tutor from "../components/Tutor/Tutor";
import TutorDetail from "../components/Tutor/TutorDetail";
import LoginScreen from "../components/Authentication/Login/LoginScreen";
import SignupScreen from "../components/Authentication/Signup/SignupScreen";
import ForgotPasswordScreen from "../components/Authentication/Login/ForgotPasswordScreen";
import ScheduleScreen from "../components/Schedule/ScheduleScreen";
import HistoryScreen from "../components/History/HistoryScreen";
import ListCoursesScreen from "../components/ListCourses/ListCoursesScreen";
import CourseDetailScreen from "../components/ListCourses/CourseDetailScreen";
import NavMenuScreen from "../components/NavMenu/NavMenuScreen";
import ProfileScreen from "../components/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Tutor" component={Tutor} />
        <Stack.Screen name="TutorDetail" component={TutorDetail} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="ListCoursesScreen" component={ListCoursesScreen} />
        <Stack.Screen
          name="CourseDetailScreen"
          component={CourseDetailScreen}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="NavMenuScreen" component={NavMenuScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
