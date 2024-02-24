import { StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dialog, Portal, PaperProvider } from 'react-native-paper';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/MyButton/MyButton';
import instance from '../../service/AxiosOrder/AxiosOrder';


export default function DiaogBox({ visible, hideDialog, studata, changeData }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    useEffect(() => {
        setName(studata?.name)
        setAge(studata.age)
        setAddress(studata?.address)
        setContact(studata?.contact)
    }, [studata])

    const updateData = () => {
        instance.put('/student/update/' + studata.id, {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
                console.log(response);
                console.log("Student data updated!");
                changeData();
                clear();

            })
            .catch(function (error) {
                console.log(error);

            });
    }
    const clear = () => {
        setName("");
        setAge("");
        setAddress("");
        setContact("");
    }

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
                            value={age ? age.toString() : ""}
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginRight: 45 }}>
                        <MyButton
                            mode={"contained"}
                            style={styles.btn}
                            text={"Update"}
                            textColor={"white"}
                            buttonColor={"#281C65"}
                            onPress={updateData}
                        />
                        <MyButton
                            mode={"contained"}
                            style={styles.btn}
                            text={"Cancel"}
                            textColor={"white"}
                            buttonColor={"#281C65"}
                            onPress={hideDialog}
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
    txt: {
        marginBottom: 5,
    }

})