import React from "react";
import { View, Text } from "react-native";

const DateLesson = ({date, extra}) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{date}</Text>
      <Text>{extra}</Text>
    </View>
  );
};

export default DateLesson;
