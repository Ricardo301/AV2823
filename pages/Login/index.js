import React,{useContext,useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native'

import { UsuarioContext } from '../../contexts/user';
import { Container,
    Logo,
    CaixaLogin,
    ContainerButton,
    ButtonText,
    Button,
    InputText,
    Input,
    ForgotPasswordText,
    ContainerSubmit,
    ButtonSubmit,
    ButtonSubmitText




 } from "./styles";



const Login = () =>{

   


   const {signIn,signUp} = useContext(UsuarioContext)
    const [email,setEmail] = useState("antonio@antonio.com")
    const [password,setPassword] = useState("123123")
    const [currentButton,setCurrentButton] = useState('membro')
    return (
        <Container>
            <CaixaLogin>
                <ContainerButton>
                    <Button lastClick={currentButton == 'membro'?true:false}
                    onPress={()=>{setCurrentButton('membro')}}>
                        <ButtonText lastClick={currentButton == 'membro'?true:false}>Membro</ButtonText>

                    </Button>
                    <Button lastClick={currentButton == 'convidado'?true:false}
                    onPress={()=>{setCurrentButton('convidado')}}>
                        <ButtonText lastClick={currentButton == 'convidado'?true:false}>Convidado</ButtonText>

                    </Button>
                </ContainerButton>
                <InputText>E-mail</InputText>
                <Input
                value={email}
                placeholder="Digite seu email"
                onChangeText={text=>setEmail(text)}
                
                />

                <InputText>Senha</InputText>
                <Input
                value={password}
                placeholder="Digite sua senha"
                onChangeText={text=>setPassword(text)}
                secureTextEntry={true}/>

                <ForgotPasswordText>
                    Esqueci a senha!
                </ForgotPasswordText>

            <ContainerSubmit>
            <ButtonSubmit onPress={()=>{signUp(email,password)}} invert={true}>
                        <ButtonSubmitText invert={true}>Cadastre-se</ButtonSubmitText>

                    </ButtonSubmit>

                    <ButtonSubmit onPress={()=>{signIn(email,password)}} >
                        <ButtonSubmitText>Entrar</ButtonSubmitText>

                    </ButtonSubmit>

            </ContainerSubmit>

            </CaixaLogin>

        </Container>
       // <View style={{marginTop:'20'}}>
            
        //    <TouchableOpacity onPress={()=>{signUp(email,password)}}>
       //     <Text>Cadastrar</Text>
        //    </TouchableOpacity>
          //  <TouchableOpacity onPress={()=>{signIn(email,password)}}>
//<Text>Login</Text>
         //   </TouchableOpacity>
     //   </View>
    )
}


export default Login;