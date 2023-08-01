import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen,lightGreen } from './Constant'
const Home = (props) => {
  return (
    <View >
    <Background style={{flex:1,position: 'relative',zIndex:1}} >
        <View style={{marginHorizontal:40, marginVertical:100, position: 'absolute',}}>
        <Text style={{color:'white',fontSize:64}}>Let's start</Text>
        <Text style={{color:'white',fontSize:64,marginBottom:40}}>Coading</Text>
        <Btn bgColor={darkGreen} textColor='white' btnLabel='Login' Press={()=>props.navigation.navigate("Login")}/>
        <Btn bgColor='white' textColor={darkGreen} btnLabel='Signup' Press={()=>props.navigation.navigate("Signup")} />
        </View>
    </Background>
    </View>
  )
}

export default Home