import React, {createContext,useState,useEffect} from 'react'
import firebaseApp from '../services/firebase';
import {getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut as signOutFirebase,
onAuthStateChanged} from 'firebase/auth'





const auth = getAuth();

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) =>{

    useEffect(()=>{
        onAuthStateChanged(auth,(userState)=>{
            setUser(userState)
        })
    },[])

    const [user,setUser] = useState(null);

    const signIn = async(email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(resp=>{

        })
        .catch(err=>console.warn(err))

    }
    const signUp = async (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(resp=>{

        })
        .catch(err=>console.warn(err))

    }

    const signOut =async () =>{
        signOutFirebase(auth).then(resp=>{
            console.warn('Usuario Deslogado')
        })
        .catch(err=>console.warn(err))

    }
    


    return(
        <UsuarioContext.Provider value={{user,signOut,signIn,signUp}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioProvider}