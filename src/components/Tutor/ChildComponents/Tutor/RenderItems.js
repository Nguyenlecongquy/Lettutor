import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSpecialitiesFilter } from "../../../../redux/reducers/filter";

const RenderItems = (props) => {
  const dispatch = useDispatch();

  const specialities = useSelector((state) => state.filter.data.specialities);

  const specialitiesChoose = () => {
    dispatch(setSpecialitiesFilter(props.title));
  };

  return (
    <View style={styles.items}>
      <Pressable onPress={specialitiesChoose}>
        <Text
          style={
            props.title != specialities ? styles.textBefore : styles.textAfter
          }
        >
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    height: 30,
    borderRadius: 15,
    backgroundColor: "#e4e6eb",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textBefore: {
    marginHorizontal: 10,
    color: "#000",
  },
  textAfter: {
    marginHorizontal: 10,
    color: "blue",
  },
});

export default RenderItems;
