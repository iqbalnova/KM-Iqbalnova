import { View, Text } from 'react-native'
import React from 'react'
import MainRoutes from './src/routes/MainRoutes'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}