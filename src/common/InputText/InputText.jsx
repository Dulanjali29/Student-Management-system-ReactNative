import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper';


import React from 'react'

export default function InputText({lable,value,onChangeText,secureTextEntry,style,icon}) {
   
  return (
   
     <TextInput
     mode='outlined'
      label={lable}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={style}
      icon={icon}
    />
   
  )
}