import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import Login from '../screens/Login'
import Register from '../screens/Register'
import DetailMovie from '../screens/DetailMovie'

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='DetailMovie' component={DetailMovie} />
      <Stack.Screen name='Main' component={BottomTab}/>
    </Stack.Navigator>
  )
}