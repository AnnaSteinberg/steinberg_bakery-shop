// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApEOBjovSyB_Zemv_VbD9JKK5ovIePOWI",
    authDomain: "bacery-shop.firebaseapp.com",
    projectId: "bacery-shop",
    storageBucket: "bacery-shop.firebasestorage.app",
    messagingSenderId: "357231291115",
    appId: "1:357231291115:web:8a18a3a7f8e83e9f3b6cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)