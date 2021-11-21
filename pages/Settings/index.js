import React,{useContext} from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { UsuarioContext } from '../../contexts/user';



const Settings = () =>{

   

    const {signOut} = useContext(UsuarioContext)

    return (
        <View>
            <TouchableOpacity onPress={()=>{signOut()}}>
            <Text>Settings</Text>
            </TouchableOpacity>
           
        </View>
    )
}


export default Settings;