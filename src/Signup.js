import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import { darkGreen } from './Constant'
import Field from './Field'
import Btn from './Btn'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native'

const Signup = (props) => {



    const [firstname, setFirstname] = useState('')
    

    const [lastname, setLastname] = useState('')

    const [email, setEmail] = useState('')
    const [contact, setContact] = useState()
    const [Password, setPassword] = useState()

    const [confirm, setConfirm] = useState()



    AsyncStorage.setItem('firstname', firstname);
    AsyncStorage.setItem('lastname', lastname);
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('contact', contact);
    AsyncStorage.setItem('Password', Password);
    AsyncStorage.setItem('confirm', confirm );






//     const onnavigation=(props)=>{

//         if(firstname==""){
        
// alert('please enter your name')
//         }

//         else{
//            props.navigation.navigate('datashow')
//         }


//     }



    return (
        
        
        <Background>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginTop: 10 }}>Register</Text>
                <Text style={{ color: "white", fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: -15, alignItems: 'center', marginTop: -60 }}>
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: 'gray', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your Account</Text>

                    <Field placeholder="First Name" onChangeText={(Text) => setFirstname(Text)} />


                    <Field placeholder="Last Name" onChangeText={(Text) => setLastname(Text)} />


                    <Field placeholder="Email/UseName" keyboardType={'email-address'} onChangeText={(Text) => setEmail(Text)} />


                    <Field placeholder="Contact Number" keyboardType={"numeric"} onChangeText={(Text) => setContact(Text)} />

                    <Field placeholder="Password" secureTextEntry={true} onChangeText={(Text) => setPassword(Text)} />

                    <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={(Text) => setConfirm(Text)}  />
                    <View style={{ display: 'flex', width: '78%', paddingRight: 16, flexDirection: 'row' }}>


                        <Text style={{ color: 'gray', flexDirection: 'row', fontSize: 16 }}>By signing in , you agree to our{" "}</Text>
                        <Text style={{ color: darkGreen, fontSize: 16, fontWeight: 'bold' }}>Terms & Conditions</Text>
</View>





                    <View style={{ display: 'flex', flexDirection: 'row', width: '78%', paddingRight: 16, justifyContent: 'center', marginBottom: 1 }}>
                        <Text style={{ color: 'gray', flexDirection: 'row', fontSize: 16 }}>and{" "}</Text>
                        <Text style={{ color: darkGreen, fontSize: 16, fontWeight: 'bold' }}>Privacy Policy</Text>
                    </View>





                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Signup" Press={()=> ( firstname== ""||firstname==undefined ||confirm !=Password||lastname==""||email==""||contact=="") ? alert("please fill all fields"):props.navigation.navigate('datashow') } 
                    
                    
                    
                    
                    />


                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Alrady Have an account</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{ color: darkGreen, fontSize: 'bold', fontSize: 16, marginLeft: 10 }}>Login</Text>
                        </TouchableOpacity>
                    </View>     



                </View>

            </View>



        </Background>
        
    )
}

export default Signup

