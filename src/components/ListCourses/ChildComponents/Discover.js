import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Discover = (props) => {
  let course = props.course

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: course.imageUrl,
        }}
        style={styles.image}
      />
      <View style={{padding: 20}}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>{course.name}</Text>
        <Text style={{ marginVertical: 10 }}>{course.description}</Text>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Discover</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#dadada'
  },
  image: {
    width: windowWidth - windowWidth * 0.1 - 2,
    height: ((windowWidth - windowWidth * 0.1) * 170) / 250,
    resizeMode: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#0071f0',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 10,
  }
});

export default Discover;
