import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../common/MyButton/MyButton'
import { Card, PaperProvider } from 'react-native-paper';


export default function MyCard({ name, age, address, contact, onPressUpdate, onPressDelete }) {

  const [visible, setVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={{ padding: 15 }}>
        <Card>

          <View>
            <Text style={styles.text}>Name    : {name} </Text>
            <Text style={styles.text}>Age        : {age} </Text>
            <Text style={styles.text}>Address : {address} </Text>
            <Text style={styles.text}>Contact  : {contact}</Text>
          </View>
          
          <View style={{ padding: 10, }}>
            <MyButton
              text={"Update"}
              textColor={"#281C65"}
              mode={"outlined"}
              style={styles.btn}
              onPress={onPressUpdate}
            />
            <MyButton
              text={"Delete"}
              textColor={"#281C65"}
              mode={"outlined"}
              style={styles.btn}
              onPress={onPressDelete}
            />
          </View>
        </Card>
      </View>
    </PaperProvider>
  )
}
const styles = StyleSheet.create({
  MainView: {
    padding: 15
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '400',
    marginTop: 10

  },
  btn: {
    borderColor: '#281C65',
    marginBottom: 10,

  }

})