import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";

const Logo = require("../../../assets/logo/lettutor_logo.png");
const Language = require("../../../assets/logo/united-states.eb0c11f1.png");

const HeaderV2 = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  head: {
    width: "100%",
    height: 50,
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoButtonContainer: {
    width: "40%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  languageButtonContainer: {
    width: "15%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoButton: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  languageButton: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  LogoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  LanguageImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#e4e6eb",
  },
})

export default HeaderV2;
