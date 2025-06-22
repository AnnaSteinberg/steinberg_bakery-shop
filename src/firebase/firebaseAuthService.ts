
// import {signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../configurations/firebase-config.ts';
import {LoginData} from "../utils/shop-types.ts";

const loginWithEmail = async (data:LoginData)=>{
    await signInWithEmailAndPassword(auth, data.email, data.password)
    return data.email
}

const loginWithGoogle = async ()=>{
    return Promise.resolve('')                                                         // ??temp
}

export  const  login = async (data: LoginData) => {
    return data.email === 'GOOGLE'? loginWithGoogle(): loginWithEmail(data)
}