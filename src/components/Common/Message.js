import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Message = () => {
  return (
    <Pressable style={styles.message}>
      <AntDesign name="message1" size={24} color="white" />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  message: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default Message;
