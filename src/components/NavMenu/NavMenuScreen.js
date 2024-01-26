import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
  Text,
} from "react-native";
import Header from "../Common/Header";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ImageViewer from "../Profile/ChildComponents/ImageViewer";

const windowHeight = Dimensions.get("window").height;

const NavMenuScreen = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user.user)
  console.log("user", user)

  const moveToProfile = () => {
    props.navigation.navigate("ProfileScreen");
  };

  // Recurring Lesson Schedule
  const moveToRLS = () => {};

  const moveToTutor = () => {
    props.navigation.navigate("Tutor");
  };

  const moveToSchedule = () => {
    props.navigation.navigate("ScheduleScreen");
  };

  const moveToHistory = () => {
    props.navigation.navigate("HistoryScreen");
  };

  const moveToCourses = () => {
    props.navigation.navigate("ListCoursesScreen");
  };

  const moveToMyCourses = () => {};

  const moveToBecomeTutor = () => {};

  const logOut = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation} />

      <ScrollView style={styles.body}>
        <View style={{ width: "90%", marginHorizontal: "5%" }}>
          <Pressable onPress={moveToProfile}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
              </View>
              <Text style={styles.text}>{user.name}</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToRLS}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="calendar-alt" size={40} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>Recurring Lesson Schedule</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToTutor}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5
                  name="chalkboard-teacher"
                  size={28}
                  color="#5b6cf3"
                />
              </View>
              <Text style={styles.text}>Tutor</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToSchedule}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="calendar-check" size={40} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>Schedule</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToHistory}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="history" size={34} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>History</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToCourses}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="graduation-cap" size={28} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>Courses</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToMyCourses}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="book-open" size={28} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>My Courses</Text>
            </View>
          </Pressable>

          <Pressable onPress={moveToBecomeTutor}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="user-graduate" size={34} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>Become a tutor</Text>
            </View>
          </Pressable>

          <Pressable onPress={logOut}>
            <View style={styles.items}>
              <View style={styles.icon}>
                <FontAwesome5 name="sign-out-alt" size={32} color="#5b6cf3" />
              </View>
              <Text style={styles.text}>Log out</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Gift />
      <Message />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: windowHeight - 50,
    position: "absolute",
    left: 0,
    top: 50,
  },
  items: {
    flexDirection: "row",
    height: 50,
    marginTop: 3,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "500",
  },
  icon: {
    width: 50,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
});

export default NavMenuScreen;
