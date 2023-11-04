import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Entypo } from "@expo/vector-icons";

const RenderReview = (props) => {
    data = props.data
  return (
    <View style={{flexDirection: 'row', marginBottom: 15}}>
        <View>
            <Image source={{uri: data.avatar}} style={styles.avatar}/>
        </View>
        <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
            <Text>{data.name}</Text>
            <Text style={styles.timeText}>{data.time}</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
            <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
        <Entypo name="star" size={18} color="yellow" />
            </View>
            <Text>{data.comment}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    timeText:{
        marginLeft: 20,
        color: 'gray',
    }
})

export default RenderReview
