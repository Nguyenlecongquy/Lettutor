import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Introduce = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="history" size={150} color="#5b6cf3" />
      <Text style={styles.schedule}>History</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          The following is a list of lessons you have attended
        </Text>
        <Text>You can review the details of the lessons you have attended</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
  },
  schedule: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textContainer: {},
  text: {},
});

export default Introduce;
