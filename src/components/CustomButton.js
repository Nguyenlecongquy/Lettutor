import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

const CustomButton = ({ source, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={source} style={styles.Image}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default CustomButton;
