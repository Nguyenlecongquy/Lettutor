import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Introduce = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="calendar-clock"
        size={150}
        color="#5b6cf3"
      />
      <Text style={styles.schedule}>Schedule</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Here is a list of the sessions you have booked
        </Text>
        <Text>
          You can track when the meeting starts, join the meeting with one click
          or can cancel the meeting before 2 hours
        </Text>
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
