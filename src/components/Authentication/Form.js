import { StyleSheet, Text, View, Linking, Alert } from "react-native";
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
  const user = useSelector((state) => state.authentication.users);

  const forgotPassword = () => {
    props.navigation.navigate("ForgotPasswordScreen");
  }

  const onSubmit = (data) => {
    if (props.form == "LOG IN") {
      for (let i = 0; i < user.length; i++) {
        if (data.email == user[i].email) {
          if (data.password == user[i].password) {
            Alert.alert("Log in Success!");
            dispatch(setCurrent(data.email))
            props.navigation.navigate("Tutor");
            return;
          } else {
            Alert.alert("Wrong password!");
            return;
          }
        }
      }
      Alert.alert("Wrong email!");
    } else {
      let exist = false;
      for (let i = 0; i < user.length; i++) {
        if (data.email == user[i].email) {
          exist = true;
          break;
        }
      }
      if (exist == true) Alert.alert("Email already exists!");
      else {
        Alert.alert("Sign up Success!");
        dispatch(setUser(data));
        props.navigation.navigate("LoginScreen");
      }
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
