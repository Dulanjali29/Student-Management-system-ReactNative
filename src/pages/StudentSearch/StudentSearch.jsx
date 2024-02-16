import { View,Text, StyleSheet } from 'react-native'
import React from 'react'

import Card from '../../component/MyCard/MyCard';

export default function StudentSearch() {
  return (
    <View style={styles.view}>
      <View style={styles.text}>
      <Text variant="headlineMedium" style={{ color: '#281C65' }} >STUDENT DETAILS </Text>
      </View>
      <Card />
    </View>
  )
}
const styles=StyleSheet.create({
  text:{
      alignItems: 'center',
    
  },
  view:{
marginTop:10
  }
})