

import { View, Text } from 'react-native'
import React from 'react'
import Registration from './src/pages/Registration/Registration'
import Login from './src/pages/Login/Login'
import StudentSearch from './src/pages/StudentSearch/StudentSearch'
import StudentAction from './src/pages/StudentAction/StudentAction'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
    // <View>
    //  
    //   {/* <Registration/> */}
    //   {/* <StudentSearch/> */}
    //   {/* <StudentAction/> */}
    // </View>




  )
}