import { View, StyleSheet, Image ,Icon} from 'react-native'
import {  Text,TextInput } from 'react-native-paper';
import { useState } from 'react';
import React from 'react'
import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/MyButton/MyButton';

export default function StudentAction() {
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[address,setAddress]=useState("");
  const[contact,setContact]=useState("");

  const save=()=>{

  }
  
  const clear=()=>{
    
  }
  return (
    <View>
       <View style={styles.buttonicon}>
               
               </View>
               <View style={styles.secondView}>
                   <View style={styles.text} >
                       <Text variant="headlineMedium" style={{ color: '#281C65' }} >ADD STUDENT</Text>
                   </View>
                   <View style={styles.View}>
   
                       <Image style={styles.img} source={require('../../assets/add_user.png')} />
                   </View>
                   <View style={styles.inputText}>
                       <InputText
                           style={styles.txt}
                           value={name}
                           lable={"Name"}
                           onChangeText={(val) => setName(val)}
                           icon={"user"}
                       />
                       <InputText
                           style={styles.txt}
                           value={age}
                           lable={"Age"}
                           onChangeText={(val) => setEmail(val)}
   
                       />
                      <InputText
                           style={styles.txt}
                           value={address}
                           lable={"Address"}
                           onChangeText={(val) => setEmail(val)}
   
                       />
                        <InputText
                           style={styles.txt}
                           value={contact}
                           lable={"Contact"}
                           onChangeText={(val) => setEmail(val)}
   
                       />
   
                   </View>
   
                   <View style={styles.btn}>
   
                       <MyButton
                           mode={"contained"}
                           style={styles.btn_in}
                           text={"SAVE"}
                           textColor={"white"}
                           buttonColor={"#281C65"}
                           onPress={save}
   
                       />
                       <MyButton
                       style={styles.btn_in}
                       text={"CLEAR"}
                       textColor={"white"}
                       buttonColor={"#5A8385"}
                       onPress={clear}
   
                   />
                   </View>
                 
               </View>
    </View>
  )
}
const styles=StyleSheet.create({
  mainView: {
    padding: 10,
    marginTop: 0,
    paddingBottom: 10
},
secondView: {
    padding: 40,
    marginTop: 120,
    paddingBottom: 10

},
inputText: {
    paddingBottom: 10,
},
txt: {
    marginTop: 10,
},
text: {
    alignItems: 'center',


}
,
btn: {
    paddingTop: 0,
    marginTop: 30,
    marginBottom: 0,
},
img: {
    marginTop: 40,
    marginBottom: 40

},
View: {
    alignItems: 'center',
    position: 'relative',
    padding: 10

},

btn_in: {
    marginBottom: 20,
},

})