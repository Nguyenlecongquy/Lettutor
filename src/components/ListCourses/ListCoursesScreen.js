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
import PageSegmentation from "../Common/PageSegmentation";
import IntroAndSearch from "./ChildComponents/IntroAndSearch";
import Courses from "./ChildComponents/Courses";

const windowHeight = Dimensions.get("window").height;

const ListCoursesScreen = (props) => {
  let listCourses = props.route.params.listCourses.data
  let count = listCourses.count
  listCourses = listCourses.rows
  console.log("listCourses", listCourses)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation}/>
      <ScrollView style={styles.body}>
        <IntroAndSearch/>
        <Courses navigation={props.navigation} listCourses={listCourses}/>
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

export default ListCoursesScreen;
