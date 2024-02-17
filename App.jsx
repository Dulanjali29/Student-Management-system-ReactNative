
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Registration from './src/pages/Registration/Registration'
import Login from './src/pages/Login/Login'
import StudentSearch from './src/pages/StudentSearch/StudentSearch'
import StudentAction from './src/pages/StudentAction/StudentAction'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Registration} />
      <Stack.Screen name="StudentAction" component={StudentAction} />
      <Stack.Screen name="StudentSearch" component={StudentSearch} />
    </Stack.Navigator>
    </NavigationContainer>
   



  )
}