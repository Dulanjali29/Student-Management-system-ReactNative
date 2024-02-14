
import React from 'react'
import { IconButton} from 'react-native-paper';

export default function IconBtn(icon,iconColor,size,onPress) {
  return (
    <IconButton
    icon={icon}
    iconColor={iconColor}
    size={size}
    onPress={onPress}
  />

  )
}