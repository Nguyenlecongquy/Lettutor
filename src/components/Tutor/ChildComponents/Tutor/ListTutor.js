import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderTutor from "./RenderTutor";

const ListTutor = (props) => {
  const listTutor = props.data

  return (
    <View style={styles.listTutor}>
      <Text style={{ fontSize: 26, fontWeight: "bold", letterSpacing: 1 }}>
        Recommended Tutors
      </Text>
      {listTutor.map((items) => (
        <RenderTutor
          avatar={items.avatar}
          name={items.name}
          nationality={items.nationality}
          nationalityFlag={items.nationalityFlag}
          star={items.star}
          listTag={items.listTag}
          introduce={items.introduce}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listTutor: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
    flex: 1,
  },
});

export default ListTutor;
