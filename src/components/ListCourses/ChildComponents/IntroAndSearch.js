import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

const IntroAndSearch = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const test = () => {
    // console.log(category);
  };

  const dataLevel = [
    { key: "1", value: "Any Level" },
    { key: "2", value: "Beginner" },
    { key: "3", value: "Upper-Beginner" },
    { key: "4", value: "Pre-Intermediate" },
    { key: "5", value: "Intermediate" },
    { key: "6", value: "Upper-Intermediate" },
    { key: "7", value: "Pre-Advance" },
    { key: "8", value: "Advance" },
    { key: "9", value: "Very Advance" },
  ];

  const dataCategory = [
    { key: "1", value: "For Studing Abroad" },
    { key: "2", value: "English For Traveling" },
    { key: "3", value: "Conversational English" },
    { key: "4", value: "English For Beginners" },
    { key: "5", value: "Business English" },
    { key: "6", value: "STARTERS" },
    { key: "7", value: "English For Kid" },
    { key: "8", value: "PET" },
  ];

  const dataSort = [
    { key: "1", value: "Level decreasing" },
    { key: "2", value: "Level ascending" },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../../../assets/logo/course.png")}
          style={styles.logo}
        />
        <View style={styles.discover}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Discover Courses
          </Text>
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            containerStyle={styles.searchBar}
            onChangeText={updateSearch}
            value={search}
          />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          LiveTutor has built the most quality, methodical and scientific
          courses in the fields of life for those who are in need of improving
          their knowledge of the fields.
        </Text>
      </View>
      <View>
        <MultipleSelectList
          setSelected={(val) => setLevel(val)}
          data={dataLevel}
          save="value"
          label="Level"
          placeholder="Select level"
        />
        <MultipleSelectList
          setSelected={(val) => setCategory(val)}
          data={dataCategory}
          save="value"
          label="Category"
          placeholder="Select category"
          onSelect={test}
        />
        <SelectList
          setSelected={(val) => setSort(val)}
          data={dataSort}
          save="value"
          placeholder="Sort by level"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  discover: {
    flex: 1,
    marginLeft: 5,
    justifyContent: "space-evenly",
  },
  searchBar: {
    padding: 0,
    backgroundColor: "#fff",
    borderWidth: 0,
  },
});

export default IntroAndSearch;
