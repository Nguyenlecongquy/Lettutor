import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DateLesson from "../../Schedule/ChildComponents/DateLesson";
import TeacherInfor from "../../Schedule/ChildComponents/TeacherInfor";

const RenderClass = (props) => {
  data = props.data;
  return (
    <View style={styles.container}>
      <DateLesson date={data.date} extra={data.timePass} />
      <TeacherInfor data={data} />

      <View style={styles.lessonTime}>
        <Text style={{ fontSize: 18 }}>Lesson Time: {data.time}</Text>
      </View>
      <View style={styles.detail}>
        <View style={styles.detailView}>
          <Text>No request for lesson</Text>
        </View>
        <View style={styles.detailView}>
          <Text>Tutor haven't reviewed yet</Text>
        </View>
        <View style={styles.press}>
          <Pressable>
            <Text style={{color: '#00f'}}>Add a Rating</Text>
          </Pressable>
          <Pressable>
            <Text style={{color: '#00f'}}>Report</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ececef",
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  lessonTime: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  detail: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  detailView: {
    borderWidth: 1,
    borderColor: '#ececef',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  press: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ececef',
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});

export default RenderClass;
