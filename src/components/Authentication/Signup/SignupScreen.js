import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Form from "../Form";
import HeaderV2 from "../../Common/HeaderV2";

const LoginImage = require("../../../../assets/login/login.png");

const windowHeight = Dimensions.get("window").height;

const SignupScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <HeaderV2/>

      <ScrollView style={styles.body}>
        <View style={styles.LoginImageContainer}>
          <Image source={LoginImage} style={styles.LoginImage} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.Greeting}>Start learning with LetTutor</Text>
          <Text style={styles.Intro}>
            Become fluent faster through one on one video chat lessons tailored
            to your goals.
          </Text>
          <Form form="SIGN UP" navigation={props.navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: "100%",
    height: windowHeight - 50,
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "#fff",
  },
  LoginImageContainer: {
    width: "100%",
    height: 300,
    marginTop: "3%",
  },
  LoginImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Greeting: {
    color: "#008fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: "5%",
  },
  Intro: {
    textAlign: "center",
    fontSize: 20,
  },
  formContainer: {
    width: "80%",
    height: "50%",
    marginHorizontal: "10%",
  },
});

export default SignupScreen;
