import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DateLesson from "./DateLesson";
import TeacherInfor from "./TeacherInfor";

const RenderClass = (props) => {
  data = props.data;
  return (
    <View style={styles.container}>
      <DateLesson date={data.date} extra={data.lesson}/>
      <TeacherInfor data={data}/>

      <View style={styles.detail}>
        <View style={styles.time}>
          <Text style={{ fontSize: 18 }}>{data.time}</Text>
          <Pressable style={styles.cancel}>
            <MaterialIcons name="cancel" size={24} color="#ff0000" />
            <Text>Cancel</Text>
          </Pressable>
        </View>

        <View style={styles.request}>
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="down" size={15} color="black" />
            <Text>Request for lesson</Text>
          </Pressable>
          <Pressable>
            <Text style={{ color: "#00f" }}>Edit Request</Text>
          </Pressable>
        </View>
        <View style={styles.contentRequest}>
          <Text>
            Currently there are no requests for this class. Please write down
            any requests for the teacher.
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Pressable style={styles.meeting}>
          <Text>Go to meeting</Text>
        </Pressable>
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
  teacherInfor: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  infor: {
    height: 70,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 5,
    resizeMode: "stretch",
    borderRadius: 30,
  },
  countryImg: {
    width: 25,
    resizeMode: "contain",
    marginRight: 5,
  },
  detail: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancel: {
    width: 90,
    height: 35,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ff0000",
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 3,
  },
  request: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ececef",
    backgroundColor: "#fafafa",
    height: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentRequest: {
    borderWidth: 1,
    borderColor: "#ececef",
    padding: 10,
  },
  meeting: {
    width: 120,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f5f5f5',
    borderColor: '#bcecef',
    borderRadius: 5,
  },
});

export default RenderClass;
