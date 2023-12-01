import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

const CustomInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <Text style={{ color: "#e7afaf", marginTop: 5 }}>{props.label}</Text>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              placeholder={props.placeholder}
              placeholderTextColor="#e7afaf"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={props.secureTextEntry}
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Required"}
            </Text>
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
    color: "#000",
  },
});

export default CustomInput;
