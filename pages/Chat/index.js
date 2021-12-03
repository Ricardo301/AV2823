import React,{useContext,useState,useEffect,useRef,useCallback} from 'react';
import { UsuarioContext } from '../../contexts/user';
import { GiftedChat,InputToolbar  } from 'react-native-gifted-chat'
import firebaseApp from '../../services/firebase';
import { StyleSheet } from 'react-native'

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
                mensagem:'messages'
            })
        }catch(err){
            console.log('err')
        }
    }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

     
      function renderInputToolbar (props) {
        return (
          <InputToolbar {...props} containerStyle={styles.toolbar} />
        )
      }

    return (
        
        <Container >
            <GiftedChat 
             renderInputToolbar={renderInputToolbar}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user.id,
        
      }}
    />
    
           
    

                    
  
        </Container>
        
        
    )
}

  
  
  

export default Chat;

const styles = StyleSheet.create({
    toolbar: {
        borderRadius:30,
       flex:1,
        width:400,
        height:120,
        
        
        

    }
  })