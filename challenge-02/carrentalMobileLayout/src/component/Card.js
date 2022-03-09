import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Card = ({gambar, judul}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={gambar}>

        </Image>
      </View>
      <View>
        <Text style={styles.titleIcon}>
          {judul}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 90,
      height:90,
      backgroundColor: '#fff'
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      backgroundColor: '#DEF1DF',
      borderRadius: 10
    },
    icon: {
      width: 30,
      height: 30,
    },
    titleIcon: {
      textAlign: 'center',
      marginVertical:10,
      
    },
})