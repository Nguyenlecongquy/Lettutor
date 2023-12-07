import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import Header from "../Common/Header";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./ChildComponents/ImageViewer";
import CustomInput from "../Authentication/CustomInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, setName } from "../../redux/reducers/authentication";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

const windowHeight = Dimensions.get("window").height;

const ProfileScreen = (props) => {
  const dispatch = useDispatch();

  PlaceholderImage = require("../../../assets/profile/default.png");

  const { control, handleSubmit } = useForm();
  const email = useSelector((state) => state.authentication.current);
  let name = "";
  let avatar = "";
  let country = "";
  let phone = "";

  const findInfor = () => {
    let users = useSelector((state) => state.authentication.users);
    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email) {
        name = users[i].name;
        avatar = users[i].avatar;
        country = users[i].country;
        phone = users[i].phone;
      }
    }
  };
  findInfor();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      let imageInfor = {
        email: email,
        avatar: result.assets[0].uri,
      };
      dispatch(setAvatar(imageInfor));
    } else {
      alert("You did not select any image.");
    }
  };

  const myLevel = [
    { key: "1", value: "Pre A1 (Beginner)" },
    { key: "2", value: "A1 (Higher Beginner)" },
  ];
  const [value, setValue] = useState("");

  const tagsData = [
    "English for kids",
    "Conversational",
    "English for Business",
    "STARTERS",
    "MOVERS",
    "FLYERS",
    "KET",
    "IELTS",
    "PET",
    "TOEFL",
    "TOEIC",
  ];
  const [tag, setTag] = useState([]);

  const onSubmit = (data) => {
    let nameInfor = {
      email: email,
      name: data.name,
    };
    dispatch(setName(nameInfor));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation} />

      <ScrollView style={styles.body}>
        <View style={styles.profile}>
          <View style={styles.baseInfo}>
            <Pressable onPress={pickImageAsync}>
              <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={avatar}
                style={styles.avatar}
              />
            </Pressable>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>{name}</Text>
            <Text>Account ID: f569c202-7bbf-4620-af77-ecc1419a6b28</Text>
            <Pressable>
              <Text style={{ color: "#00f" }}>Others review you</Text>
            </Pressable>
            <Pressable>
              <Text style={{ color: "#00f" }}>Change password</Text>
            </Pressable>
          </View>

          <Text style={{ padding: 10, backgroundColor: "#f5f6fa" }}>
            Account
          </Text>

          <View style={styles.baseInfo}>
            <CustomInput
              name="name"
              label="* Name"
              control={control}
              placeholder={name}
            />
            <CustomInput
              name="email"
              label="Email Address"
              control={control}
              placeholder={email}
            />
            <CustomInput
              name="country"
              label="* Country"
              control={control}
              placeholder={country}
            />
            <CustomInput
              name="Phone"
              label="* Phone Number"
              control={control}
              placeholder={phone}
            />
            <Text style={styles.label}>* My Level</Text>
            <SelectList
              setSelected={(val) => setValue(val)}
              data={myLevel}
              save="value"
              placeholder="Choose your level"
              boxStyles={styles.selectList}
            />
            <Text style={styles.label}>* Want to learn</Text>
            <MultipleSelectList
              setSelected={(val) => setTag(val)}
              data={tagsData}
              save="value"
              label="Level"
              placeholder="Choose "
              boxStyles={styles.selectList}
            />
            <Pressable onPress={handleSubmit(onSubmit)}>
              <Text style={styles.submit}>Save changes</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <Gift />
      <Message />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: windowHeight - 50,
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "#fff",
  },
  profile: {
    width: "96%",
    marginHorizontal: "2%",
    marginTop: 20,
    borderWidth: 1,
  },
  baseInfo: {
    padding: 35,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
  },
  selectList: {
    marginTop: 5,
  },
  submit: {
    backgroundColor: "#0071f0",
    width: 120,
    borderRadius: 5,
    color: "#fff",
    padding: 10,
    textAlign: "center",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  label: {
    color: "gray",
    marginTop: 5,
  },
});

export default ProfileScreen;
