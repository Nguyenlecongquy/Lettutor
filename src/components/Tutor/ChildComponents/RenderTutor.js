import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RenderTag from "./RenderTag";

const RenderTutor = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("../../../../assets/listTutor/000001.jpg")}
          style={styles.avatar}
        />
      </View>

      <Feather name="heart" size={24} color="blue" style={styles.heart} />
      <Text style={styles.name}>{props.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: props.nationalityFlag }} style={styles.flag} />
        <Text>{props.nationality}</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {props.listTag.map((tags) => (
          <RenderTag title={tags} />
        ))}
      </View>
      <Text>{props.introduce}</Text>
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <Pressable style={styles.book}>
          <MaterialIcons name="call-to-action" size={24} color="blue" />
          <Text style={styles.bookText}>Book</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
  },
  heart: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  flag: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  book: {
    width: 100,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  bookText: {
    color: "blue",
    marginHorizontal: 5,
  },
});

export default RenderTutor;
