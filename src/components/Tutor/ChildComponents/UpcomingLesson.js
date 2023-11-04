import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const UpcomingLesson = () => {
  return (
    <LinearGradient
      style={styles.upcomingLesson}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#0c3ddc", "#05189e"]}
    >
      <View style={styles.upcoming1}>
        <Text style={[styles.textUpcoming, { fontSize: 26 }]}>
          Upcoming lesson
        </Text>
      </View>
      <View style={styles.upcoming2}>
        <View style={styles.upcoming2_1}>
          <Text style={[styles.textUpcoming, { fontSize: 16 }]}>
            Sun, 29 Oct 23
          </Text>
          <Text style={[styles.textUpcoming, { fontSize: 16 }]}>
            01:30 - 01:55
          </Text>
          <Text
            style={[styles.textUpcoming, { color: "#b8e020", fontSize: 14 }]}
          >
            (starts in 01:19:27)
          </Text>
        </View>
        <View style={styles.upcoming2_2}>
          <Pressable style={styles.enterRoomBtn}>
            <SimpleLineIcons
              name="social-youtube"
              size={14}
              color="blue"
              style={{ marginHorizontal: 5 }}
            />
            <Text
              style={[styles.textUpcoming, { color: "blue", fontSize: 15 }]}
            >
              Enter lesson room
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.upcoming3}>
        <Text style={[styles.textUpcoming, { fontSize: 14 }]}>
          Total lesson time is 512 hours 55 minutes
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  upcomingLesson: {
    width: "90%",
    height: 220,
    marginHorizontal: "5%",
    borderRadius: 10,
    flex: 1,
  },
  upcoming1: {
    flex: 3,
    justifyContent: "flex-end",
  },
  upcoming2: {
    flex: 5,
    flexDirection: "row",
  },
  upcoming3: {
    flex: 2,
  },
  upcoming2_1: {
    flex: 3,
    justifyContent: "center",
  },
  upcoming2_2: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textUpcoming: {
    color: "#fff",
    textAlign: "center",
  },
  enterRoomBtn: {
    width: "90%",
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default UpcomingLesson;
