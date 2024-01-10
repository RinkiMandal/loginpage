import { initializeApp } from "firebase/app";
import {getFirestore,collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5qFqlwLj_z0OOw2dYlUvWJ66r9SV7-Ig",
  authDomain: "today-f1898.firebaseapp.com",
  projectId: "today-f1898",
  storageBucket: "today-f1898.appspot.com",
  messagingSenderId: "857701746698",
  appId: "1:857701746698:web:e07fc98eb4667980b0b7f3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const usersRef = collection(db , 'users')

export default app;