import React from "react";
import { View, StyleSheet } from "react-native";
import RenderClass from "./RenderClass";

const ListClass = (props) => {
  const data = props.data;
  return (
    <View>
      {data.map((items) => (
        <RenderClass data={items.value}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListClass;
