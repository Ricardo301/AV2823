import React,{useContext,useState,useEffect,useRef} from 'react';
import { UsuarioContext } from '../../contexts/user';

import firebaseApp from '../../services/firebase';

import {getFirestore,
addDoc,
collection,
onSnapshot,
query,
where
} from 'firebase/firestore'


import {
    Container,
    Button,
    ButtonText,
    Message
} from './styles'


const Chat = () =>{

    const [messages,setMessages] = useState([])
    const {user} = useContext(UsuarioContext)

    useEffect(()=>{
        const unsub=onSnapshot(query(collection(db,"mensagens"),where("lido","!=",true)),
        (querySnapshot)=>{
            const tmp = [];
             querySnapshot.forEach(async(document)=>{
                tmp.push({
                  id:document.id,
                  ...document.data() 
                })   
            } )

            setMessages(tmp)
        })
        return ()=>{
            unsub()
        }
    },[])


    const db = getFirestore(firebaseApp)

    async function handbleMenssage(){
        try{
            await addDoc(collection(db,'mensagens'),{
                lido:false,
                mensagem:'olá'
            })
        }catch(err){
            console.log('err')
        }
    }

    return (
        <Container>
            <Button onPress={()=>{handbleMenssage()}}>
            <ButtonText>Enviar Mensagem</ButtonText>
            
            </Button>
            {messages.map((item)=>(
                <Message key={item.id}>{item.id}</Message>
            ))}

  
        </Container>
    )
}

  
  
  

export default Chat;