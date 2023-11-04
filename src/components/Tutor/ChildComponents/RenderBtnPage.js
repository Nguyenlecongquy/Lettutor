import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RenderBtnPage = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
});

export default RenderBtnPage;
