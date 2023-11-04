import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const TutorInfor = () => {
  return (
    <View style={styles.infor}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={require("../../../../../assets/listTutor/000001.jpg")}
            style={styles.avatar}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.name}>Apri Baldo</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={18} color="yellow" />
            <Entypo name="star" size={18} color="yellow" />
            <Entypo name="star" size={18} color="yellow" />
            <Entypo name="star" size={18} color="yellow" />
            <Entypo name="star" size={18} color="yellow" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
              }}
              style={styles.flag}
            />
            <Text>Vietnamese</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.intro}>
          Hello! My name is April Baldo, you can just call me Teacher April. I
          am an English teacher and currently teaching in senior high school. I
          have been teaching grammar and literature for almost 10 years.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={styles.btnHeart}>
            <AntDesign name="hearto" size={24} color="blue" />
            <Text>Favorite</Text>
          </Pressable>
          <Pressable style={styles.btnHeart}>
            <Octicons name="report" size={24} color="blue" />
            <Text>Report</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infor: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  intro: {
    paddingVertical: 10,
  },
  btnHeart: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
  },
});

export default TutorInfor;
