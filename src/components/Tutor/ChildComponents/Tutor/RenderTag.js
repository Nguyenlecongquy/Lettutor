import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RenderTag = (props) => {
  return (
    <View style={styles.items}>
      <Text style={styles.textAfter}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    height: 30,
    borderRadius: 15,
    backgroundColor: "#e4e6eb",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textAfter: {
    marginHorizontal: 10,
    color: "blue",
  },
});

export default RenderTag;
