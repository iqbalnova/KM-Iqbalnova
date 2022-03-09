import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CardMobil from '../component/CardMobil'

const DaftarMobil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{ fontWeight:'bold', fontSize:17, color:'black' }}>Daftar Mobil</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
        <CardMobil></CardMobil>
      </ScrollView>
    </View>
  )
}

export default DaftarMobil

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff'
  },
  topContainer:{
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10
  },
  scroll:{
    marginHorizontal: 20,
    marginVertical: 10
  }
})