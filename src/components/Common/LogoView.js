import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Logo = require("../../../assets/logo/lettutor_logo.png");

const LogoView = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 30,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})

export default LogoView
