import { View, Text, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImageUrl } from './src/helpers/apiAccessToken'
import { useState, useEffect } from 'react'

export default function App() {

  const [listMovie, setListMovie] = useState([]);

  useEffect(()=>{
    getListMovie('now_playing');
  },[]);

  const getListMovie = async (endpoint) => {
    try {
      const results = await axios.get(`${BaseUrl}movie/${endpoint}`, {
        headers : {Authorization : `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results)
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error)
    }
  };


  const CardMovie = ({item}) => {
    return (
      <View>
        <Image source={{ uri: `${ImageUrl}${item.poster_path}` }} style={{ height: 200 }} />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>List Movie</Text>

      <View>
        <TouchableOpacity onPress={()=> getListMovie('popular')}>
          <Text>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> getListMovie('top_rated')}>
          <Text>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> getListMovie('now_playing')}>
          <Text>Now Playing</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={CardMovie}/>
    </View>
  )
}