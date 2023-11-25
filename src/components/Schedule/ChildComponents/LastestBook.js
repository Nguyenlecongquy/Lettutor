import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LastestBook = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lastest Book</Text>
      <View style={styles.table}>
        <View style={styles.row1}>
          <View style={{ flex: 3 }}>
            <Text>Name</Text>
          </View>
          <View style={{ flex: 4 }}>
            <Text>My name</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Page</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>0</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={{ flex: 3 }}>
          <Text>Description</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text>0</Text>
          </View>
        </View>
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
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  table: {
    flex: 1,
  },
  row1: {
    flex: 1,
    flexDirection: "row",
  },
  row2: {
    flex: 1,
    flexDirection: "row",
  },
});

export default LastestBook;
