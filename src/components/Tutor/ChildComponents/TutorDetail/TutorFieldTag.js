import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import RenderTag from '../Tutor/RenderTag'

const TutorFieldTag = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {props.data.map((item) => <RenderTag title={item}/>)}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
      fontSize: 20,
      fontWeight: "400",
    },
})

export default TutorFieldTag
