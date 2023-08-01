import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import { darkGreen } from './Constant'
import Field from './Field'
import Btn from './Btn'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'





const Login = (props) => {

    const [email,setEmail]=useState('')
    const [Password2,setPassword2]=useState()

const [field,setField]=useState('')


const [password,setPassword]=useState()

AsyncStorage.setItem('field', field)
AsyncStorage.setItem('password', password)


AsyncStorage.getItem('email')
.then((value)=>{
    setEmail(value)
})
.catch((error)=>{
    //handle error here
})


AsyncStorage.getItem('Password')
.then((value)=>{
    setPassword2(value)
})
.catch((error)=>{
    //handle error here
})






    return (
        <Background>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: 'gray', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your Account</Text>

                    <Field placeholder="Email/Username" keyboardType={"email-address"} onChangeText={(field)=>setField(field)} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={(password)=>setPassword(password)}/>
                    <View style={{ alignItems: 'flex-end',width:'78%',paddingRight:16,marginBottom:120 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={()=>(field==""||password==""||password!=Password2||field!=email)?alert("plz fill all fields"):props.navigation.navigate('datashow')}   />
                    <View style={{flexDirection:'row',display:'flex',justifyContent:'center'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Don't Have an account</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
                    <Text style={{color:darkGreen,fontSize:'bold',fontSize:16,marginLeft:10}}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Background>
    )
}

export default Login