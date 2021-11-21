import React,{useContext,useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native'

import { UsuarioContext } from '../../contexts/user';

const Login = () =>{

   const {signIn,signUp} = useContext(UsuarioContext)
    const [email,setEmail] = useState("antonio@antonio.com")
    const [password,setPassword] = useState("123123")

    return (
        <View style={{marginTop:'20'}}>
            
            <TouchableOpacity onPress={()=>{signUp(email,password)}}>
            <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{signIn(email,password)}}>
            <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Login;