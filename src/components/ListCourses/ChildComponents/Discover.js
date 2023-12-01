import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Discover = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
        }}
        style={styles.image}
      />
      <View style={{padding: 20}}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>Life in the Internet Age</Text>
        <Text style={{ marginVertical: 10 }}>Let's discuss how technology is changing the way we live</Text>
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
