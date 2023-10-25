import {
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import CustomInput from "./CustomInput";
import CustomSubmit from "./CustomSubmit";
import CustomButton from "./CustomButton";

const facebookImg = require('../../assets/logo/facebook-logo.3bac8064.png')
const googleImg = require('../../assets/logo/google-logo.5f53496e.png')
const phoneImg = require('../../assets/logo/mobile-logo.8ef12de5.png')

export default function LoginForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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
        }}
        placeholder="mail@example.comaaaa"
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
        }}
        placeholder="123456"
      />
      <Text style={{color: '#008fff', marginBottom: 5}}
        onPress={() => Linking.openURL('http://google.com')}>
        Forgot Password?
      </Text>

      <CustomSubmit label="LOG IN" onSubmit={handleSubmit(onSubmit)}/>
      <Text style={{textAlign: 'center', marginVertical: 15}}>
        Or continue with
      </Text>

      <View style={styles.threeButton}>
        <CustomButton source={facebookImg}/>
        <CustomButton source={googleImg}/>
        <CustomButton source={phoneImg}/>
      </View>

      <Text style={{textAlign: 'center', marginVertical: 15}}>
        Not a member yet?
        <Text style={{color: '#008fff', marginBottom: 5}}
          onPress={() => Linking.openURL('http://google.com')}>
          Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  threeButton: {
    width: '60%',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: '20%',
  }
});
