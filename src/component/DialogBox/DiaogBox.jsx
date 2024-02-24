import { StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/MyButton/MyButton';
export default function DiaogBox({ visible, hideDialog }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    return (
        <View>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Update Student</Dialog.Title>
                    <View style={{ padding: 20 }}>
                        <InputText
                            style={styles.txt}
                            value={name}
                            lable={"Name"}
                            onChangeText={(value) => setName(value)}
                        />
                        <InputText
                         style={styles.txt}
                            value={age}
                            lable={"Age"}
                            onChangeText={(value) => setAge(value)}
                        />
                        <InputText
                         style={styles.txt}
                            value={address}
                            lable={"Address"}
                            onChangeText={(value) => setAddress(value)}
                        />
                        <InputText
                         style={styles.txt}
                            value={contact}
                            lable={"Contact"}
                            onChangeText={(value) => setContact(value)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row',  justifyContent:'space-between',padding:20,marginRight:45}}>
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
const styles = StyleSheet.create({
    btn: {
        marginBottom: 20,
        width: "150%",       
     
    },
    txt:{
        marginBottom:5,
    }
    
})