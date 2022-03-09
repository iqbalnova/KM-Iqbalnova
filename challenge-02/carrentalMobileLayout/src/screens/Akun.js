import { StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native'
import React from 'react'
import { allura } from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Akun = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{ fontWeight:'bold', fontSize:17, color:'black' }}>Akun</Text>
      </View>
      <View style={styles.midContainer}>
        <Image style={styles.midBanner} source={allura}/>
        <View style={{ alignItems:'center' }}>
          <Text style={styles.midText}>
            Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah
          </Text>
          <TouchableOpacity style={styles.register}>
            <Text style={styles.textRegister}>
              Register
            </Text>
          </TouchableOpacity>       
        </View>
      </View>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff'
  },
  topContainer:{
    paddingHorizontal: 20,
    marginTop: 30,
  },
  midContainer:{
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  midBanner:{
    height: 230,
    width: 350
  },
  midText:{
    color:'black',
    textAlign:'center'
  },
  register:{
    width: 70,
    height: 35,
    backgroundColor: '#5CB85F',
    justifyContent:'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  textRegister:{
    color: '#fff'
  }
})