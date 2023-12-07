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

const windowHeight = Dimensions.get("window").height;

const ProfileScreen = (props) => {
  PlaceholderImage = require("../../../assets/profile/default.png");
  const [selectedImage, setSelectedImage] = useState(null);

  const { control, handleSubmit } = useForm();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
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
                selectedImage={selectedImage}
                style={styles.avatar}
              />
            </Pressable>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Hai Pham</Text>
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
              rules={{
                required: true,
              }}
              placeholder="m"
            />
            <CustomInput
              name="email"
              label="Email Address"
              control={control}
              rules={{
                required: true,
              }}
              placeholder="m"
            />
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
});

export default ProfileScreen;
