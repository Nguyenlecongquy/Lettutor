import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Gift = () => {
  return (
    <Pressable style={styles.gift}>
      <FontAwesome5 name="gift" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gift: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
    position: "absolute",
    right: 10,
    bottom: 60,
  },
});

export default Gift;
