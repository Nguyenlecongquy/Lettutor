import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomSubmit from "./CustomSubmit";
import CustomButton from "./CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setCurrent } from "../../redux/reducers/authentication";

const facebookImg = require("../../../assets/logo/facebook-logo.3bac8064.png");
const googleImg = require("../../../assets/logo/google-logo.5f53496e.png");
const phoneImg = require("../../../assets/logo/mobile-logo.8ef12de5.png");

export default function Form(props) {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const urlLogin = "https://sandbox.api.lettutor.com/auth/login";
  const urlSignup = "https://sandbox.api.lettutor.com/auth/register";
  const urlListTutor = "https://sandbox.api.lettutor.com/tutor/more?perPage=9&page=1";

  const forgotPassword = () => {
    props.navigation.navigate("ForgotPasswordScreen");
  };

  const login = async (dataInput) => {
    setIsLoading(true);
    try {
      let result = await fetch(urlLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInput),
      });

      result = await result.json();

      if (result.statusCode == 400) {
        Alert.alert(result.message);
      } else {
        dispatch(setUser(result));

        const authToken = result.tokens.access.token;
        const authorization = "Bearer " + authToken;

        let listTutor = await fetch(urlListTutor, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
        });
        listTutor = await listTutor.json();
        
        props.navigation.navigate("Tutor", {listTutor: listTutor});
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (dataInput) => {
    setIsLoading(true);
    try {
      let result = await fetch(urlSignup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInput),
      });

      result = await result.json();
      
      if (result.statusCode == 400) {
        Alert.alert(result.message);
      } else {
        Alert.alert("Successful");
        props.navigation.navigate("LoginScreen");
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    if (props.form == "LOG IN") {
      let dataInput = {
        email: data.email,
        password: data.password,
      };
      login(dataInput);
    } else {
      let dataInput = {
        email: data.email,
        password: data.password,
        source: null,
      };
      signup(dataInput);
    }
  };

  return (
    <View>
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
      <CustomInput
        name="password"
        label="PASSWORD"
        control={control}
        rules={{
          minLength: {
            value: 6,
            message: "Password should be minimum 6 characters long",
          },
          required: true,
        }}
        placeholder="123456"
      />

      {props.form == "LOG IN" && (
        <Text
          style={{ color: "#008fff", marginBottom: 5 }}
          onPress={forgotPassword}
        >
          Forgot Password?
        </Text>
      )}

      <CustomSubmit label={props.form} onSubmit={handleSubmit(onSubmit)} />

      {isLoading && <ActivityIndicator size="large" color="#008fff" />}

      <Text style={{ textAlign: "center", marginVertical: 15 }}>
        Or continue with
      </Text>

      <View style={styles.threeButton}>
        <CustomButton source={facebookImg} />
        <CustomButton source={googleImg} />
        <CustomButton source={phoneImg} />
      </View>

      {props.form == "LOG IN" && (
        <Text
          style={{ textAlign: "center", marginVertical: 15, marginBottom: 80 }}
        >
          Not a member yet?
          <Text
            style={{ color: "#008fff", marginBottom: 5 }}
            onPress={() => props.navigation.navigate("SignupScreen")}
          >
            Sign up
          </Text>
        </Text>
      )}
      {props.form == "SIGN UP" && (
        <Text
          style={{ textAlign: "center", marginVertical: 15, marginBottom: 80 }}
        >
          Already have an account?
          <Text
            style={{ color: "#008fff", marginBottom: 5 }}
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            Log in
          </Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  threeButton: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "20%",
  },
});
