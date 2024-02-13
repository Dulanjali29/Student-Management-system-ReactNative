import { View, Text, StyleSheet ,Image} from 'react-native'
import { useState } from 'react';
import React from 'react'
import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/MyButton/MyButton';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {

    }
    return (

        <View style={styles.mainView}>

            <View>
                <Text>Student Management System</Text>
            </View>
            <View>
               
            </View>
            <View style={styles.inputText}>
                <InputText
                    value={name}
                    lable={"User name"}
                    onChangeText={(val) => setName(val)}

                />
                <InputText
                    value={email}
                    lable={"Email"}
                    onChangeText={(val) => setEmail(val)}

                />
                <InputText
                    value={password}
                    lable={"Password"}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry
                />

            </View>

            <View style={styles.btn}>

                <MyButton

                    text={"SIGN UP"}
                    textColor={"white"}
                    buttonColor={"blue"}
                    onPress={signUp}

                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        padding: 20,
        paddingBottom: 50
    },
    inputText: {
        marginTop:10,
    },
    btn: {
        marginTop: 30,
        marginBottom: 20,
    },
    img:{
marginTop:10
    }

})