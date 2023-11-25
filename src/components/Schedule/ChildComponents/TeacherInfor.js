import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TeacherInfor = (props) => {
  data = props.data;
  return (
    <View style={styles.teacherInfor}>
      <Image source={{ uri: data.avatar }} style={styles.avatar} />
      <View style={styles.infor}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{data.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: data.countryImg }} style={styles.countryImg} />
          <Text>{data.countryName}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="message1" size={18} color="#00f" />
          <Text style={{ color: "#00f", marginLeft: 5 }}>Direct Message</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teacherInfor: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  infor: {
    height: 70,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 5,
    resizeMode: "stretch",
    borderRadius: 30,
  },
  countryImg: {
    width: 25,
    resizeMode: "contain",
    marginRight: 5,
  },
});

export default TeacherInfor;
