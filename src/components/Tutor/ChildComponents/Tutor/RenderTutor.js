import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RenderTag from "./RenderTag";
import { useSelector, useDispatch } from "react-redux";
import { setScreen } from "../../../../redux/reducers/screen";

const RenderTutor = (props) => {
  let listTagArr = props.listTag.split(",");

  const specialities = useSelector((state) => state.filter.data.specialities);
  const name = useSelector((state) => state.filter.data.name);
  const nationality = useSelector((state) => state.filter.data.nationality);

  const dispatch = useDispatch()

  const moveToTutorDetail = () => {
    dispatch(setScreen("TutorDetail"))
    props.navigation.navigate("TutorDetail", {data: props});
  };

  var star = Math.ceil(props.star)
  var yellowStar = [];
  var greyStar = [];
  for (let i = 0; i < star; i++) {
    yellowStar.push(<Entypo name="star" size={18} color="#fadb14" />);
  }
  for (let i = 0; i < 5 - star; i++) {
    greyStar.push(<Entypo name="star" size={18} color="#f0f0f0" />);
  }

  var setOfSpecialities = new Set(props.listTag);
  var displaySpecialities = setOfSpecialities.has(specialities);
  if (specialities == "All") displaySpecialities = true;

  var displayName = name == props.name;
  if (name == "") displayName = true;

  var setOfNationality = new Set(nationality);
  var displayNationality = false;
  if (
    (setOfNationality.has("Native English Tutor") &&
      props.nationality == "England") ||
    (setOfNationality.has("Vietnamese Tutor") &&
      props.nationality == "Vietnamese") ||
    (setOfNationality.has("Foreign Tutor") &&
      props.nationality != "Vietnamese")
  )
    displayNationality = true;
  if (setOfNationality.size == 0)
    displayNationality = true

  if (displaySpecialities && displayName && displayNationality) {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Pressable onPress={moveToTutorDetail}>
            <Image source={{ uri: props.avatar }} style={styles.avatar} />
          </Pressable>
        </View>

        <Feather name="heart" size={24} color="blue" style={styles.heart} />
        <Pressable onPress={moveToTutorDetail}>
          <Text style={styles.name}>{props.name}</Text>
        </Pressable>

        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: props.nationalityFlag }} style={styles.flag} />
          <Text style={{ marginLeft: 3 }}>{props.nationality}</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {yellowStar}
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {greyStar}
          </View>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {listTagArr.map((tags) => (
            <RenderTag title={tags} />
          ))}
        </View>
        <Text style={{ height: 70 }}>{props.introduce}</Text>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <Pressable style={styles.book}>
            <MaterialIcons name="call-to-action" size={24} color="blue" />
            <Text style={styles.bookText}>Book</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
  },
  heart: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  flag: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  book: {
    width: 100,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  bookText: {
    color: "blue",
    marginHorizontal: 5,
  },
});

export default RenderTutor;
