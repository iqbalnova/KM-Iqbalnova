import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Card from './src/component/Card'


const App = () => {
  const RenderScreen = props =>{
    return (
      <View>
        <Text>Nama Saya {props.namaDepan + props.namaBelakang}, 
        Biasa dipanggil {props.namaDepan}, Umur saya {props.umur}, hobi saya {props.hobi}</Text>
      </View>
    )
  }

  const [firstName, setFirstName] = useState('Bukan Iqbal');

  if(firstName === 'Iqbal'){
    return(
      <View>
        <Text>
          Ini render Optional
        </Text>
        <TouchableOpacity onPress={() => setFirstName('Bukan Iqbal')}>
          <Text>Ganti Nama</Text>
        </TouchableOpacity>
      </View>
    );  
  }else{
    return (
      <View>
        <RenderScreen namaDepan="Iqbal" namaBelakang="Nova" hobi="Tidur" umur={20} />
        <RenderScreen namaDepan="Dora" namaBelakang="Emon" hobi="Nangis" umur={25} />
        <RenderScreen namaDepan="Haha" namaBelakang="Hihi" hobi="Makan" umur={22} />
  
        <Text>
          Hello my name is {firstName}
        </Text>
  
        <TouchableOpacity onPress={() => setFirstName('Iqbal')}>
          <Text>
            Ganti Nama
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({})