import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import instance from '../../service/AxiosOrder/AxiosOrder';
import Card from '../../component/MyCard/MyCard';
import DiaogBox from '../../component/DialogBox/DiaogBox';
import { PaperProvider } from 'react-native-paper';

export default function StudentSearch() {

  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);
  const [studata, setStuData] = useState("");

  const getStudentData = () => {
    instance({
      method: 'get',
      url: '/student/getAll',
    })
      .then(function (response) {

        const array = [];
        response.data.forEach(val => {
          array.push({
            id: val.id,
            name: val.student_name,
            age: val.student_age,
            address: val.student_address,
            contact: val.student_contact,

          });

        });

        setData(array);

      });
  }
  useEffect(() => {
    getStudentData()
  }, []);

  const deleteStu = (id) => {
    instance.delete('/student/delete/' + id)

      .then(response => {
        console.log(response)

        console.log("student deleted !");
        getStudentData()

      })
      .catch(error => {
        console.error(error);

      });
  }

  const updateStu = (val) => {
    setStuData(val)
    setVisible(true)
  }

  const changeData = () => {
    getStudentData()
    setVisible(false)
  }

  return (
    <PaperProvider>
      <DiaogBox
        id={id}
        visible={visible}
        studata={studata}
        hideDialog={() => { setVisible(false) }}
        changeData={changeData}
      />
      <View >
        <View style={{ alignItems: 'center', backgroundColor: '#281C65', padding: 10, marginTop: 0 }}>
          <Text variant="headlineMedium" style={{ color: 'white' }} >Student Details </Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card

              name={item.name}
              age={item.age}
              address={item.address}
              contact={item.contact}
              onPressDelete={() => deleteStu(item.id)}
              onPressUpdate={() => updateStu(item)}
            />
          )}

        />
        <Card />
      </View>
    </PaperProvider>
  )
}
