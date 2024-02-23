import { View, Text, StyleSheet,FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import instance from '../../service/AxiosOrder/AxiosOrder';
import Card from '../../component/MyCard/MyCard';

export default function StudentSearch() {

  const [data,setData]=useState("");


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
    getStudentData(setData)
  }, []);


  return (
    <View >
      <View style={{alignItems:'center',backgroundColor:'#281C65',padding:10,marginTop:0}}>
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
                               
                            />
                        )}
                       
                    />
      <Card />
    </View>
  )
}
