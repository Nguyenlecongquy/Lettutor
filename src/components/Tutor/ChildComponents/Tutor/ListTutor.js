import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderTutor from "./RenderTutor";

const ListTutor = () => {
  const listTutor = [
    {
      id: "000001",
      avatar: "",
      name: "Nguyen Thi A",
      nationality: "Vietnamese",
      nationalityFlag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
      star: "",
      listTag: ["English for business", "IELTS", "PET", "KET"],
      introduce:
        "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
    },
    {
      id: "000002",
      avatar: "",
      name: "Nguyen Thi A",
      nationality: "Vietnamese",
      nationalityFlag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
      star: 5,
      listTag: ["English for business", "IELTS", "PET", "KET"],
      introduce:
        "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
    },
    {
      id: "000002",
      avatar: "",
      name: "Nguyen Thi A",
      nationality: "Vietnamese",
      nationalityFlag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png",
      star: 5,
      listTag: ["English for business", "IELTS", "PET", "KET"],
      introduce:
        "Hello! My name is April Baldo, you can just call me Teacher April. I am an English teacher and currently teaching in senior high school.",
    }
  ];

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
