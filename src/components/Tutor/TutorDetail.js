import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import Header from "../Common/Header";
import TutorInfor from "./ChildComponents/TutorDetail/TutorInfor";
import TutorFieldText from "./ChildComponents/TutorDetail/TutorFieldText";
import TutorFieldTag from "./ChildComponents/TutorDetail/TutorFieldTag";
import OtherReview from "./ChildComponents/TutorDetail/OtherReview";
import PageSegmentation from "../Common/PageSegmentation";
import { Video } from "expo-av";

const windowHeight = Dimensions.get("window").height;

const TutorDetail = (props) => {

  const data = props.route.params.data;

  const video = React.useRef(null);

  const fieldTutor = [
    {
      title: "Education",
      data: "Earth, Vegeta planet",
    },
    {
      title: "Languages",
      data: ["English", "Japanese"],
    },
    {
      title: "Specialties",
      data: ["English for Business", "IELTS", "PET", "KET"],
    },
    {
      title: "Interests",
      data: "Fighting",
    },
    {
      title: "Teaching experience",
      data: "7 years of English tutor",
    },
    {
      title: "Others review",
      data: [
        {
          key: 1,
          value: {
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
            name: "John",
            time: "2 minutes ago",
            star: 5,
            comment: "hello",
          },
        },
        {
          key: 2,
          value: {
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
            name: "John",
            time: "2 minutes ago",
            star: 5,
            comment: "hello",
          },
        },
        {
          key: 3,
          value: {
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
            name: "John",
            time: "2 minutes ago",
            star: 5,
            comment: "hello",
          },
        },
        {
          key: 4,
          value: {
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
            name: "John",
            time: "2 minutes ago",
            star: 5,
            comment: "hello",
          },
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation}/>

      <ScrollView style={styles.body}>
        <TutorInfor data = {data}/>

        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            controls
          />
        </View>
        <View style={styles.field}>
          <TutorFieldText
            title={fieldTutor.at(0).title}
            data={fieldTutor.at(0).data}
          />
          <TutorFieldTag
            title={fieldTutor.at(1).title}
            data={fieldTutor.at(1).data}
          />
          <TutorFieldTag
            title={fieldTutor.at(2).title}
            data={fieldTutor.at(2).data}
          />
          <TutorFieldText
            title={fieldTutor.at(3).title}
            data={fieldTutor.at(3).data}
          />
          <TutorFieldText
            title={fieldTutor.at(4).title}
            data={fieldTutor.at(4).data}
          />
          <OtherReview
            title={fieldTutor.at(5).title}
            data={fieldTutor.at(5).data}
          />
        </View>
        <PageSegmentation/>
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
  videoContainer: {
    width: "90%",
    height: 200,
    marginHorizontal: "5%",
    marginTop: 20,
  },
  video: {
    flex: 1,
  },
  field: {
    width: "90%",
    marginTop: 10,
    marginHorizontal: "5%",
  },
});

export default TutorDetail;
