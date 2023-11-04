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

const listTutor = [
  {
    id: "000001",
    avatar: "",
    name: "Apri Baldo",
    nationality: "Vietnamese",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
    star: "",
    listTag: ["English for business", "IELTS", "PET", "KET"],
    introduce:
      "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
  },
  {
    id: "000002",
    avatar: "",
    name: "Apri Baldo",
    nationality: "Vietnamese",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
    star: 5,
    listTag: ["English for business", "IELTS", "PET", "KET"],
    introduce:
      "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
  },
  {
    id: "000002",
    avatar: "",
    name: "Apri Baldo",
    nationality: "Vietnamese",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
    star: 5,
    listTag: ["English for business", "IELTS", "PET", "KET"],
    introduce:
      "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
  }
];


const Tutor = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header />
      <ScrollView style={styles.body}>
        <UpcomingLesson />
        <FindTutor />
        <ListTutor data={listTutor} navigation={props.navigation}/>
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
