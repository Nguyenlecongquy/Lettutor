import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TutorFieldText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.script}>{props.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  script: {
    paddingLeft: 20,
    color: "#94a7c3",
  },
});

export default TutorFieldText;
