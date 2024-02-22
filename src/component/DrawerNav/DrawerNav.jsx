import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentAction from '../../pages/StudentAction/StudentAction';
import StudentSearch from '../../pages/StudentSearch/StudentSearch';
import Home from '../../pages/Home/Home';

const Drawer = createDrawerNavigator();


export default function DrawerNav({navigation}) {
  const logout=()=>{
    navigation.navigate('Login');
  }
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Student Registration" component={StudentAction} />
    <Drawer.Screen name="Student Details" component={StudentSearch} />
    <Drawer.Screen name="Logout" component={logout} />
  </Drawer.Navigator>
  )
} 