import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import Header from "../Common/Header";
import Detail from "./ChildComponents/Detail";
import Discover from "./ChildComponents/Discover";

const windowHeight = Dimensions.get("window").height;

const CourseDetailScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation}/>
      <ScrollView style={styles.body}>
        <Discover/>
        <Detail/>
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

export default CourseDetailScreen;
