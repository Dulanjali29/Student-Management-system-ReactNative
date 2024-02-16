import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '../../common/MyButton/MyButton'
import { Card } from 'react-native-paper';


export default function MyCard() {
  return (
    <View style={styles.MainView}>
      <Card>

        <View>
          <Text style={styles.text}>Name : </Text>
          <Text style={styles.text}>Age : </Text>
          <Text style={styles.text}>Address : </Text>
          <Text style={styles.text}>Contact : </Text>
        </View>
        <View>
          <MyButton
            text={"UPDATE"}
            mode={"outlined"}
            style={{}}
          />
          <MyButton
            text={"DELETE"}
          />
        </View>
      </Card>
    </View>
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

})