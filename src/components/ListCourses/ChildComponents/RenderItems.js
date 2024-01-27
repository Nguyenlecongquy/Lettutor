import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

const RenderItems = (props) => {
  const data = props.data;
  const numberOfTopic = data.topics.length

  const navigate = () => {
    props.navigation.navigate("CourseDetailScreen", {course: data});
  };

  return (
    <Pressable style={styles.container} onPress={navigate}>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <View style={{ paddingLeft: 15 }}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.describe}>{data.description}</Text>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>{data.level}</Text>
          <Entypo name="dot-single" size={20} color="black" />
          <Text> {numberOfTopic} Lessons</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadada",
  },
  image: {
    width: 248,
    height: 170,
    resizeMode: "stretch",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  describe: {
    marginBottom: 10,
  },
});

export default RenderItems;
