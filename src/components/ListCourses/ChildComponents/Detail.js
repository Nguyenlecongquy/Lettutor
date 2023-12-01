import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Detail = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Overview</Text>
        <View>
          <View style={styles.describe}>
            <AntDesign name="questioncircleo" size={22} color="#f00" />
            <Text style={styles.text}>Why take this course</Text>
          </View>
          <Text style={styles.overviewTextDescribe}>
            Talking to other parents, friends, and family about family life is
            an important part of socializing in any language.
          </Text>
          <View style={styles.describe}>
            <AntDesign name="questioncircleo" size={22} color="#f00" />
            <Text style={styles.text}>What will you be able to do</Text>
          </View>
          <Text style={styles.overviewTextDescribe}>
            In this course, you will become familiar with the vocabulary of
            common topics related to raising children in the modern world. In
            addition, you will role play parenting situations such as talking to
            a doctor about your child's health and booking a babysitter.
          </Text>
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
          <Text style={styles.text}>Intermediate</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Course Length</Text>
        <View style={styles.describe}>
          <MaterialIcons name="topic" size={24} color="#0071f0" />
          <Text style={styles.text}> 11 Topics</Text>
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
