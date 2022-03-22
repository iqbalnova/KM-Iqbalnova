import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImageUrl } from '../../helpers/API'
import { useState, useEffect } from 'react'
import { Button } from 'react-native-elements'

export default function DetailMovie({route, navigation:{goBack}}) {
    const {movieId} = route.params;


    useEffect(()=>{
        fetchDetail({movieId});
        
      },[]);
    const fetchDetail = async ({movieId}) =>{
        try {
            const results = await axios.get(`${BaseUrl}movie/${movieId}`, {
              headers : {Authorization : `Bearer ${ACCESS_TOKEN}`},
            });
            console.log(results)
            
          } catch (error) {
            console.log(error)
          }
          
    }
  return (
      
    <View>
      <Text>index {movieId}</Text>
      <Button onPress={()=> goBack()}>

      </Button>
    </View>
  )
}