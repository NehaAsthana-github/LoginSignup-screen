import { View, Text,ImageBackground } from 'react-native'
import React, { Children } from 'react'
import Image12 from '../assets/image12.jpg'


const Background = ({children}) => {
  return <>
    <View>
     <ImageBackground source={Image12}
     style={{height:'100%',width:'100%'}}
     
     />
     <View style={{position:'absolute'}}>{children}</View>
    </View>
    </>
}

export default Background