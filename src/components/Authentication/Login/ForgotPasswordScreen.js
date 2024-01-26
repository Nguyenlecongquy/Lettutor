import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import HeaderV2 from "../../Common/HeaderV2";
import CustomInput from "../CustomInput";
import CustomSubmit from "../CustomSubmit";

const windowHeight = Dimensions.get("window").height;

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const urlResetPassword =
    "https://sandbox.api.lettutor.com/user/forgotPassword";

  const resetLink = async (data) => {
    setIsLoading(true);
    console.log("data", data);
    try {
      let result = await fetch(urlResetPassword, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      result = await result.json();
      Alert.alert(result.message);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <HeaderV2 />

      <View style={styles.body}>
        <View style={styles.formContainer}>
          <Text
            style={{ fontSize: 24, fontWeight: "500", textAlign: "center" }}
          >
            Reset Password
          </Text>
          <Text style={{ textAlign: "center" }}>
            Please enter your email address to search for your account.
          </Text>
          <CustomInput
            name="email"
            label="EMAIL"
            control={control}
            rules={{
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email is not valid",
              },
              required: true,
            }}
            placeholder="mail@example.com"
          />

          {isLoading && <ActivityIndicator size="large" color="#008fff" />}

          <CustomSubmit
            label="Send reset link"
            onSubmit={handleSubmit(resetLink)}
          />
        </View>
      </View>
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
  formContainer: {
    width: "80%",
    height: "50%",
    marginHorizontal: "10%",
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;
