import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Language = require("../../../assets/logo/united-states.eb0c11f1.png");

const CircleButton = (props) => {
  const showDrawer = () => {
    props.navigation.navigate("NavMenuScreen");
  };

  if (props.type == "language")
    return (
      <Pressable style={styles.container}>
        <Image source={Language} style={styles.image} />
      </Pressable>
    );
  else if (props.type == "menubar")
    return (
      <Pressable style={styles.container} onPress={showDrawer}>
        <View style={styles.barMenu}>
          <AntDesign name="bars" size={23} color="black" />
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#e4e6eb",
  },
  barMenu: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    backgroundColor: "#e4e6eb",
    borderColor: "#e4e6eb",
  },
});

export default CircleButton;
