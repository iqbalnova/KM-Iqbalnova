import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/API';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        username: username,
        password: password,
      };

      const res = await axios.post(`${BaseUrlApi}/auth/login`, body, {
        validateStatus: status => status < 501});
      console.log(res.status);
      if(res.status <= 201){
        navigation.navigate("Main")
      } else {
        return alert("Error")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ alignContent: 'center', justifyContent:'center', flex: 1}}>
      <View style={{ marginTop: -150 }}>
        <Text style={{ margin: 20,textAlign:'center', fontSize:40, fontWeight:'bold' }}>Login</Text>
        <View style={{margin: 10, alignContent: 'center', justifyContent:'center' }}>
          
          <Input placeholder="username" onChangeText={text => setUsername(text)} />
          <Input
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />

          
        </View>
        <View style={{ marginHorizontal:20 }}>
          <Button onPress={postLogin} title={'Sign in'} />

          <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Register')}>
            <Text>Don't have account yet ?, Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      
      
    </View>
  );
}

