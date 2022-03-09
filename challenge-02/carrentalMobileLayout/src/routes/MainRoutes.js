import { StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={BottomTab}/>
    </Stack.Navigator>
  )
}