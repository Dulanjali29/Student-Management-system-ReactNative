
import { Button } from 'react-native-paper';
import React from 'react'
import { View } from 'react-native';

export default function MyButton({icon,buttonColor,onPress,text,style,textColor}) {
  return (
   <View>
      <Button 
      
      mode="contained" 
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