
import React from 'react'
import { TextInput } from 'react-native'
import { darkGreen } from './Constant'

const Field = (props) => {
  return (
   <TextInput 
   {...props}
   style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,backgroundColor:'rgb(220,220,220)',width:'75%',marginVertical:10,height:40}}
   
   placeholderTextColor={darkGreen}
   >

   </TextInput>
  )
}

export default Field;