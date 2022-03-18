import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/API';


export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        username: username,
        password: password,
        name:{
            firstname: firstname,
            lastname: lastname
        },
        address:{
            city: city,
            street: street,
            number: number,
            zipcode: zipcode,
            geolocation:{
                lat: lat,
                long: long
            }
        },
        phone: phone
      };

      const res = await axios.post(`${BaseUrlApi}/users`, body, {
        validateStatus: status => status < 501});

      console.log(res);
      
      if(res.status <= 201){
        navigation.navigate("Login")
      } else {
        return alert("Error")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Input placeholder="Email" onChangeText={text => setEmail(text)} />
      <Input placeholder="Username" onChangeText={text => setUsername(text)} />
      <Input
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      
      <Input placeholder="First Name" onChangeText={text => setFirstname(text)} />
      <Input placeholder="Last Name" onChangeText={text => setLastname(text)} />
      <Input placeholder="City" onChangeText={text => setCity(text)} />
      <Input placeholder="Street" onChangeText={text => setStreet(text)} />
      <Input placeholder="Number" onChangeText={text => setNumber(text)} />
      <Input placeholder="Zip Code" onChangeText={text => setZipcode(text)} />
      <Input placeholder="Latitude" onChangeText={text => setLat(text)} />
      <Input placeholder="Longtitude" onChangeText={text => setLong(text)} />
      <Input placeholder="Number Phone" keyboardType='phone-pad' onChangeText={text => setPhone(text)} />

      <Button onPress={postRegister} title={'Sign up'} />

    </ScrollView>
  );
}