import React from "react";
import { View, StyleSheet } from "react-native";
import LogoView from "./LogoView";
import CircleButton from "./CircleButton";

const Header = () => {
  return (
    <View style={styles.head}>
      <LogoView />
      <View style={styles.buttonContainer}>
        <CircleButton type="language" />
        <CircleButton type="menubar" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    width: "100%",
    height: 50,
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default Header;
