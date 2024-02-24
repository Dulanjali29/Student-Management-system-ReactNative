import { StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/MyButton/MyButton';
export default function DiaogBox({visible,hideDialog}) {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
  return (
    <View>
       
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Update Student</Dialog.Title>
            <View style={{padding:20}}>
                <InputText
                value={name}
                lable={"Name"}
                onChangeText={(value)=>setName(value)}
                />
                 <InputText
                value={age}
                lable={"Age"}
                onChangeText={(value)=>setAge(value)}
                />
                 <InputText
                value={address}
                lable={"Address"}
                onChangeText={(value)=>setAddress(value)}
                />
                 <InputText
                value={contact}
                lable={"Contact"}
                onChangeText={(value)=>setContact(value)}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <MyButton
                  mode={"contained"}
                  style={styles.btn}
                  text={"Update"}
                  textColor={"white"}
                  buttonColor={"#281C65"}
                
                />
                 <MyButton
               mode={"contained"}
               style={styles.btn}
               text={"Cancel"}
               textColor={"white"}
               buttonColor={"#281C65"}
                />
            </View>
           
          </Dialog>
        </Portal>
      </View>
  )
}
const styles=StyleSheet.create({
    btn:{
        marginBottom:10,
        width:"120%",
        marginLeft:20,
        marginRight:10
    }
})