
// import {signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../configurations/firebase-config.ts';
import {LoginData, SignupData} from "../utils/shop-types.ts";
import { updateProfile } from 'firebase/auth';


const loginWithEmail = async (data:LoginData)=>{
    await signInWithEmailAndPassword(auth, data.email, data.password)
    console.log(auth.currentUser)
    return data.email
}

const loginWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user
    console.log(auth.currentUser)
    return Promise.resolve(user.email)
}

export  const  login = async (data: LoginData) => {
    return data.email === 'GOOGLE'? loginWithGoogle(): loginWithEmail(data)
}

export const registerWithEmailAndPassword = async (data:LoginData) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    return data.email
}

export const exit = async () => {
    await  signOut(auth)
}

export const saveFullName = async (data: SignupData)=> {
    const user = auth.currentUser;
    if (user) {
        await updateProfile(user, {
            displayName: `${data.firstName} ${data.lastName}`.trim()
        });
    } else {
        console.log('User not found');
    }

}