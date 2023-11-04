import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderReview from "./RenderReview";

const OtherReview = (props) => {
  dataReview = props.data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {dataReview.map((item) => (
        <RenderReview data={item.value} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "400",
  },
});

export default OtherReview;
