import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, SectionList } from "react-native";
import RenderItems from "./RenderItems";

const Courses = (props) => {
  const [selected, setSelected] = useState("Course");
  const listCourses = props.listCourses;

  let DATA = [
    {
      title: "English For Traveling",
      data: [],
    },
    {
      title: "English For Beginners",
      data: [],
    },
    {
      title: "Business English",
      data: [],
    },
  ];

  for (let i = 0; i < listCourses.length; i++) {
    let course = listCourses[i];
    console.log(course.categories[0].title);
    if (course.categories.title == "English for Traveling") {
      console.log("object");
      DATA[0].data.push(course);
    } else if (course.categories[0].title == "English for Beginners") {
      DATA[1].data.push(course);
    } else if (course.categories[0].title == "Business English") {
      DATA[2].data.push(course);
    } else {
      console.log("abc");
    }
  }

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
