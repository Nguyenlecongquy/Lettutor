import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderBtnPage from "../Tutor/ChildComponents/Tutor/RenderBtnPage";

const PageSegmentation = () => {
const listPage = ['<' ,'1', '2', '3', '4', '>']

  return (
    <View style={styles.container}>
      {listPage.map((item) => <RenderBtnPage number={item}/>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: 'row',
    marginHorizontal: "5%",
    marginTop: 30,
    marginBottom: 100,
    justifyContent: 'flex-end',
  },
});

export default PageSegmentation;
