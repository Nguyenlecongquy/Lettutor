import React from "react";
import { StyleSheet, View, Image, ScrollView, Pressable, Text, Dimensions } from "react-native";
import Form from '../Form'

const LoginImage = require("../../../../assets/login/login.png");
const Logo = require("../../../../assets/logo/lettutor_logo.png");
const Language = require("../../../../assets/logo/vietnam.3745180b.png");

const windowHeight = Dimensions.get('window').height

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.head}>
        <View style={styles.logoButtonContainer}>
          <Pressable style={styles.logoButton}>
            <Image source={Logo} style={styles.LogoImage} />
          </Pressable>
        </View>
        <View style={styles.languageButtonContainer}>
          <Pressable style={styles.languageButton}>
            <Image source={Language} style={styles.LanguageImage} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.LoginImageContainer}>
          <Image source={LoginImage} style={styles.LoginImage} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.Greeting}>Say hello to your English tutors</Text>
          <Text style={styles.Intro}>Become fluent faster through one on one video chat lessons tailored to your goals.</Text>
          <Form form='LOG IN' navigation={props.navigation}/>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    width: "100%",
    height: 50,
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoButtonContainer: {
    width: '40%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  languageButtonContainer: {
    width: '15%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoButton: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoImage: {
    width: "100%",
    height: '100%',
    resizeMode: 'contain',
  },
  LanguageImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#e4e6eb',
  },
  body: {
    width: "100%",
    height: windowHeight - 100,
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "#fff",
  },
  LoginImageContainer: {
    width: '100%',
    height: 300,
    marginTop: '3%',
  },
  LoginImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  Greeting: {
    color: '#008fff',
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '5%',
  },
  Intro: {
    textAlign: "center",
    fontSize: 20
  },
  formContainer: {
    width: '80%',
    height: '50%',
    marginHorizontal: '10%',
  },
});

export default LoginScreen;
