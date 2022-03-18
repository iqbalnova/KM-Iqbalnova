import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { icon } from '../assets'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardMobil = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContent}>
        <Image style={styles.icon} source={icon}/>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.mainTopContent}>
          <Text style={{ fontWeight:'bold', fontSize:15, color:'black'}}>Daihatsu Xenia</Text>
        </View>
        <View style={styles.mainMidContent}>
          <View style={styles.mainMidContentLeft}>
            <Feather name="users" size={15} />
            <Text> 4</Text>
          </View>
          <View style={styles.mainMidContentRight}>
            <Feather name="briefcase" size={15}  />
            <Text> 5</Text>
          </View>
        </View>
        <View style={styles.mainBottomtContent}>
          <Text style={styles.mainBottomtContent}>Rp 300.000</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardMobil

const styles = StyleSheet.create({
  container:{
    height: 100,
    flexDirection: 'row',
    elevation: 3,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 1
  },
  icon:{
    width: 50,
    height: 35
  },
  leftContent:{
    padding: 10,
    
  },
  mainContent:{
    padding: 10,
  },
  
  mainMidContent:{
    flexDirection: 'row',
  },
  mainBottomtContent:{
    color: '#5CB85F',
    fontWeight: 'bold'
  },
  mainMidContentLeft:{
    flexDirection: 'row',
    marginRight: 10
  },
  mainMidContentRight:{
    flexDirection: 'row'
  },
})