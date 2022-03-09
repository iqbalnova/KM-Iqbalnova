import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routes/MainRoutes'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}

export default App
