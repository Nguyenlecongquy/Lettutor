import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const RenderItems = (props) => {
  const [defaultStyle, setDefaultStyle] = useState(true);

  return (
    <View style={styles.items}>
      <Pressable onPress={() => setDefaultStyle(!defaultStyle)}>
        <Text
          style={
            defaultStyle ? styles.textBefore : styles.textAfter
          }
        >
          {props.title}
        </Text>
      </Pressable>
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
  textBefore: {
    marginHorizontal: 10,
    color: "#000",
  },
  textAfter: {
    marginHorizontal: 10,
    color: "blue",
  },
});

export default RenderItems;
