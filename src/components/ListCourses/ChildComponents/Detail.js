import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Detail = (props) => {
  const course = props.course;
  const numberOfTopic = course.topics.length

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Overview</Text>
        <View>
          <View style={styles.describe}>
            <AntDesign name="questioncircleo" size={22} color="#f00" />
            <Text style={styles.text}>Why take this course</Text>
          </View>
          <Text style={styles.overviewTextDescribe}>{course.reason}</Text>
          <View style={styles.describe}>
            <AntDesign name="questioncircleo" size={22} color="#f00" />
            <Text style={styles.text}>What will you be able to do</Text>
          </View>
          <Text style={styles.overviewTextDescribe}>{course.purpose}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Experience Level</Text>
        <View style={styles.describe}>
          <MaterialCommunityIcons
            name="account-multiple-plus-outline"
            size={22}
            color="#0071f0"
          />
          <Text style={styles.text}>{course.categories[0].key}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Course Length</Text>
        <View style={styles.describe}>
          <MaterialIcons name="topic" size={24} color="#0071f0" />
          <Text style={styles.text}> {numberOfTopic} Topics</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 25,
    marginTop: 10,
  },
  describe: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    marginLeft: 3,
    fontSize: 18,
  },
  overviewTextDescribe: {
    marginLeft: 30,
  },
});

export default Detail;
