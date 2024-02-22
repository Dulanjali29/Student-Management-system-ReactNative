import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '../../common/MyButton/MyButton'

export default function Home({ navigation }) {
    const studentView = () => {
        navigation.navigate('Student Details')
    }
    return (
        <View style={styles.mainView}>
            <View style={{ justifyContent: 'between', flexDirection: 'row', marginTop: 30, marginLeft: 40, flex: 1 }}>
                <MyButton

                    mode={"contained"}
                    style={styles.btn}
                    text={"Student"}
                    textColor={"white"}
                    buttonColor={"#281C65"}
                    onPress={studentView}

                />
                <MyButton

                    mode={"contained"}
                    style={styles.btn}
                    text={"Teacher"}
                    textColor={"white"}
                    buttonColor={"#281C65"}
                    onPress={studentView}
                />



            </View>
            <View style={{ justifyContent: 'between', flexDirection: 'row', marginTop: 0, marginLeft: 40 }}>
                <MyButton
                    mode={"contained"}
                    style={styles.btn}
                    text={"Courses"}
                    textColor={"white"}
                    buttonColor={"#281C65"}
                    onPress={studentView}

                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        padding: 0,
        marginTop: 0,
        paddingBottom: 10
    },
    view: {
        padding: 20
    },
    btn: {
        padding: 25,

        marginBottom: 0,

        height: '50%',
        textAlign: 'center',
        marginRight: 30
    },
})