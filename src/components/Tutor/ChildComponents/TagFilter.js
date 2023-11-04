import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import RenderItems from "./RenderItems";

function TagFilter() {
  const listTag = [
    { key: "0", value: "All" },
    { key: "1", value: "English for kids" },
    { key: "2", value: "English for Business" },
    { key: "3", value: "Conversational" },
    { key: "4", value: "STARTERS" },
    { key: "5", value: "MOVERS" },
    { key: "6", value: "FLYERS" },
    { key: "7", value: "KET" },
    { key: "8", value: "PET" },
    { key: "9", value: "IELTS" },
    { key: "10", value: "TOEFL" },
    { key: "11", value: "TOEIC" },
  ];

  return (
    <View style={styles.tag}>
      <View style={styles.tag}>
        {listTag.map((item) => (
          <RenderItems title={item.value} />
        ))}
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Reset Filters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },  
  tag: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue'
  },
  text: {
    marginHorizontal: 10,
    color: 'blue'
  }
});

export default TagFilter;
