import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, SectionList } from "react-native";
import RenderItems from "./RenderItems";

const Courses = (props) => {
  const [selected, setSelected] = useState("Course");

  const DATA = [
    {
      title: "English For Traveling",
      data: [
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
      ],
    },
    {
      title: "English For Beginners",
      data: [
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
      ],
    },
    {
      title: "Business English",
      data: [
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
        {
          name: "Life in the Internet Age",
          image:
            "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
          describe: "Let's discuss how technology is changing the way we live",
          level: "Intermediate",
          numberOfLesson: 9,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable onPress={() => setSelected("Course")}>
          <Text
            style={
              selected == "Course"
                ? [styles.text, styles.selected]
                : styles.text
            }
          >
            Course
          </Text>
        </Pressable>
        <Pressable onPress={() => setSelected("E-book")}>
          <Text
            style={
              selected == "E-book"
                ? [styles.text, styles.selected]
                : styles.text
            }
          >
            E-book
          </Text>
        </Pressable>
        <Pressable onPress={() => setSelected("Interactive E-book")}>
          <Text
            style={
              selected == "Interactive E-book"
                ? [styles.text, styles.selected]
                : styles.text
            }
          >
            Interactive E-book
          </Text>
        </Pressable>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <RenderItems data={item} navigation={props.navigation} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  navBar: {
    flexDirection: "row",
  },
  text: {
    marginRight: 10,
  },
  selected: {
    paddingBottom: 3,
    borderBottomColor: "#00f",
    borderBottomWidth: 1,
    color: "#00f",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    backgroundColor: "#fff",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
});

export default Courses;
