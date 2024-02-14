import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'

export default function Icon(name,size,color) {
  return (
   <Icon>
    name={name}
    size={size}
    color={color}
   </Icon>
  )
}