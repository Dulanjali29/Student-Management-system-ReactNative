import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Card from '../../component/MyCard/MyCard';

export default function StudentSearch() {
  return (
    <View >
      <View style={{alignItems:'center',backgroundColor:'#281C65',padding:10,marginTop:0}}>
        <Text variant="headlineMedium" style={{ color: 'white' }} >STUDENT DETAILS </Text>
      </View>
      <Card />
    </View>
  )
}
