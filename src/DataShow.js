import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'




const DataShow = () => {

const [fname,setFName]=useState('')
const [lname,setLname]=useState('')
const [email,setEmail]=useState('')
const [contact,setContact]=useState('')

const [password,setPassword]=useState()
const [confirm,setConfirm]=useState()

const [Username,setUsername]=useState('')

const [password1,setPassword1]=useState()



AsyncStorage.getItem('field')
  .then((value) => {
    setUsername(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });

  AsyncStorage.getItem('password')
  .then((value) => {
    setPassword1(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });


    AsyncStorage.getItem('firstname')
  .then((value) => {
    setFName(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });
AsyncStorage.getItem('Password')
.then((value)=>{
  setPassword(value)
})
.catch((erroe)=>{

})


AsyncStorage.getItem('confirm')
.then((value)=>{
  setConfirm(value)
})
.catch((error)=>{

})

  AsyncStorage.getItem('email')
  .then((value) => {
    setEmail(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });


  AsyncStorage.getItem('contact')
  .then((value) => {
    setContact(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });


  AsyncStorage.getItem('lastname')
  .then((value) => {
    setLname(value)
    // Handle the retrieved value
  })
  .catch((error) => {
    // Handle any errors
  });

  return (
    <View style={{top:20}}>
      <Text style={{fontSize:20}}>DataShow</Text>
      <Text>{fname}</Text>
      <Text>{lname}</Text>
      <Text>{email}</Text>
      <Text>{contact}</Text>
      <Text>{password}</Text>
      <Text>{confirm}</Text>

      <Text>{Username}</Text>
      <Text>{password1}</Text>
    </View>
  )
}

export default DataShow