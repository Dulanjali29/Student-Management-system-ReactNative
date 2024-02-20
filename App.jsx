
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Registration from './src/pages/Registration/Registration'
import Login from './src/pages/Login/Login'
import StudentSearch from './src/pages/StudentSearch/StudentSearch'
import StudentAction from './src/pages/StudentAction/StudentAction'
import DrawerNav from './src/component/DrawerNav/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/Home';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={DrawerNav}  options={{headerShown:false}}/>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Sign Up" component={Registration} />
      <Stack.Screen name="Student Registration" component={StudentAction} />
      <Stack.Screen name="Student Details" component={StudentSearch} />
    </Stack.Navigator>
    </NavigationContainer>
   



  )
}