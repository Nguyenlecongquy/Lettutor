import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
  Dimensions
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LogoView from "../Common/LogoView";
import CircleButton from "../Common/CircleButton";
import UpcomingLesson from "./ChildComponents/UpcomingLesson";
import FindTutor from "./ChildComponents/FindTutor";
import ListTutor from "./ChildComponents/ListTutor";
import PageSegmentation from "./ChildComponents/PageSegmentation";

const windowHeight = Dimensions.get('window').height;

const Tutor = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <View style={styles.head}>
        <LogoView />
        <View style={styles.buttonContainer}>
          <CircleButton type="language" />
          <CircleButton type="menubar" />
        </View>
      </View>

      <ScrollView style={styles.body}>
        <UpcomingLesson />
        <FindTutor />
        <ListTutor />
        <PageSegmentation/>
      </ScrollView>

      <Pressable style={styles.gift}>
        <FontAwesome5 name="gift" size={24} color="white" />
      </Pressable>
      <Pressable style={styles.message}>
        <AntDesign name="message1" size={24} color="white" />
      </Pressable>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    width: "100%",
    height: 50,
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  body: {
    width: "100%",
    height: windowHeight - 50,
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "#fff",
  },
  gift: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
    position: "absolute",
    right: 10,
    bottom: 60,
  },
  message: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default Tutor;
