import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const CustomSubmit = ({ label, onSubmit }) => {
  return (
    <Pressable style={styles.container} onPress={onSubmit}>
      <Text style={styles.TextSubmit}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 38,
    backgroundColor: "#008fff",
    borderColor: "#008fff",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  TextSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomSubmit;
