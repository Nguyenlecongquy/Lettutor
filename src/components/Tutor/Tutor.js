import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import UpcomingLesson from "./ChildComponents/Tutor/UpcomingLesson";
import FindTutor from "./ChildComponents/Tutor/FindTutor";
import ListTutor from "./ChildComponents/Tutor/ListTutor";
import PageSegmentation from "../Common/PageSegmentation";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import Header from "../Common/Header";

const windowHeight = Dimensions.get("window").height;

const Tutor = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header />
      <ScrollView style={styles.body}>
        <UpcomingLesson />
        <FindTutor />
        <ListTutor />
        <PageSegmentation />
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
    backgroundColor: "#fff",
  },
});

export default Tutor;
