import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  label,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <Text style={{color: '#e7afaf', marginTop: 5}}>{label}</Text>
          <View style={[styles.container, {borderColor: error ? 'red' : "#e8e8e8"}]}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#e7afaf"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Required'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 38,
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color: '#000',
  },
});

export default CustomInput;
