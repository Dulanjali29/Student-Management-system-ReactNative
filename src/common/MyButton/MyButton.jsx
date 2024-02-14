
import { Button } from 'react-native-paper';
import React from 'react'
import { View } from 'react-native';

export default function MyButton({icon,buttonColor,onPress,text,style,textColor,mode}) {
  return (
   <View>
      <Button 
      
      mode={mode}
      icon={icon} 
      buttonColor={buttonColor}
      textColor={textColor}
      onPress={onPress}
      style={style}
      >
      {text}
        
  </Button>
  </View> 
  )
}