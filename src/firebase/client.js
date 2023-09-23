import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBJrKQF4ooQaT62pCI5WvLs5Vo5mBrcwbo",
    authDomain: "ecommerce-marroquineria.firebaseapp.com",
    projectId: "ecommerce-marroquineria",
    storageBucket: "ecommerce-marroquineria.appspot.com",
    messagingSenderId: "644155721128",
    appId: "1:644155721128:web:664f8db728593e161f499d"
  };
  
  //creo una vble app con esa configuracion de firebase que copie 
  //
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);