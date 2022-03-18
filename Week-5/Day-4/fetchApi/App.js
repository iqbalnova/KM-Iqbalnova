import { View, Text } from 'react-native'
import React from 'react'
import MainRoutes from './src/routes/MainRoutes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}