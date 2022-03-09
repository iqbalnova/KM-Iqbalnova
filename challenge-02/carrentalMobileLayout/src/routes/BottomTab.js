import React from "react";
import Akun from '../screens/Akun';
import DaftarMobil from '../screens/DaftarMobil';
import Home from '../screens/Home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#0D28A6', tabBarLabelStyle:{fontSize: 13} }}>
            <Tab.Screen name='Home' component={Home} options={{ tabBarIcon : ({color}) => {
                return(
                    <Feather name="home" size={20} color={color} />
                )
            }}}/>

            <Tab.Screen name='Daftar Mobil' component={DaftarMobil} options={{tabBarIcon: ({color}) => {
                return (
                    <Feather name="list" size={20} color={color}/>
                ) 
            }}}/>

            <Tab.Screen name='Akun' component={Akun} options={{ tabBarIcon : ({color}) => {
                return(
                    <Feather name="user" size={20} color={color} />
                )
            }}}/>   
        </Tab.Navigator>
    );
};

export default BottomTab;