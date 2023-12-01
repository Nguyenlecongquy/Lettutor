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
    avatar:
      "https://api.app.lettutor.com/avatar/83802576-70fe-4394-b27a-3d9e8b50f1b7avatar1649512219387.jpg",
    name: "Apri Baldo",
    nationality: "Philippines (the)",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/300px-Flag_of_the_Philippines.svg.png",
    star: 5,
    listTag: ["English for business", "IELTS", "PET", "KET"],
    introduce:
      "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school. I have been teaching grammar and literature for almost 10 years. I am fond of reading and teaching literature as one way of knowing one’s beliefs and culture. I am friendly and full of positivity. I love teaching because I know each student has something to bring on. Molding them to become an individual is a great success.",
  },
  {
    id: "000002",
    avatar:
      "https://api.app.lettutor.com/avatar/8c4e58c4-e9d1-4353-b64d-41b573c5a3e9avatar1632284832414.jpg",
    name: "Joan Gacer",
    nationality: "Taiwan",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/225px-Flag_of_the_Republic_of_China.svg.png",
    star: 4,
    listTag: [
      "English for kids",
      "Conversational",
      "English for Business",
      "STARTERS",
      "MOVERS",
      "FLYERS",
      "KET",
      "IELTS",
      "PET",
      "TOEFL",
      "TOEIC",
    ],
    introduce:
      "I was a customer service sales executive for 3 years before I become an ESL teacher I am trained to deliver excellent service to my clients so I can help you with business English dealing with customers or in sales-related jobs and a lot more, I also love to teach beginner, intermediate and advance I speak slowly and clearly so that the student can easily follow my instructions and pronunciation. In my class, I want environment-friendly fun and engaging I have many activities designed to help your enthusiasm in learning the language. I'm so excited to meet you in one of my classes let us have fun while learning English. See you there.",
  },
  {
    id: "000003",
    avatar:
      "https://sandbox.api.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1684484879187.jpg",
    name: "Keegan",
    nationality: "Tunisia",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/225px-Flag_of_Tunisia.svg.png",
    star: 4,
    listTag: [
      "English for Business",
      "Conversational",
      "English for kids",
      "IELTS",
      "STARTERS",
      "MOVERS",
      "FLYERS",
      "KET",
      "PET",
      "TOEFL",
      "TOEIC",
    ],
    introduce:
      "I am passionate about running and fitness, I often compete in trail/mountain running events and I love pushing myself. I am training to one day take part in ultra-endurance events. I also enjoy watching rugby on the weekends, reading and watching podcasts on Youtube. My most memorable life experience would be living in and traveling around Southeast Asia.",
  },
  {
    id: "000004",
    avatar:
      "https://api.app.lettutor.com/avatar/e9e3eeaa-a588-47c4-b4d1-ecfa190f63faavatar1632109929661.jpg",
    name: "Jill Leano",
    nationality: "Philippines (the)",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/300px-Flag_of_the_Philippines.svg.png",
    star: 4,
    listTag: ["English for Business", "English for kids", "TOEFL", "TOEIC"],
    introduce:
      "Hi, My name is Jill I am an experienced English Teacher from Philippine. I would like to share my enthusiasm with the learners in this platform. I've been working with diverse learners of all levels for many years. I am greatly passionate about about profession. I love teaching because I can help others improve their skills and it gives me joy and excitement meeting different learners around the world. In my class I worked with wonderful enthusiasm and positivity, and I'm happy to focus on my learner's goal.",
  },
  {
    id: "000005",
    avatar: "https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg?w=200&h=200&c=crop",
    name: "Nguyễn Văn Khánh",
    nationality: "Vietnamese",
    nationalityFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
    star: 5,
    listTag: ["English for business", "IELTS", "PET", "KET"],
    introduce:
      "Hi, My name is Khanh. I am an experienced English Teacher from Vietnam. I would like to share my enthusiasm with the learners in this platform. I've been working with diverse learners of all levels for many years. I am greatly passionate about about profession. I love teaching because I can help others improve their skills and it gives me joy and excitement meeting different learners around the world. In my class I worked with wonderful enthusiasm and positivity, and I'm happy to focus on my learner's goal.",
  },
];

const Tutor = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header />
      <ScrollView style={styles.body}>
        <UpcomingLesson />
        <FindTutor />
        <ListTutor data={listTutor} navigation={props.navigation} />
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
