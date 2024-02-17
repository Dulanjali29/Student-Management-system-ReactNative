import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentAction from '../../pages/StudentAction/StudentAction';
import StudentSearch from '../../pages/StudentSearch/StudentSearch';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Student Registration" component={StudentAction} />
    <Drawer.Screen name="Student Details" component={StudentSearch} />
  </Drawer.Navigator>
  )
} 