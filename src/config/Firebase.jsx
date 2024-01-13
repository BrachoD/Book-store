// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { products } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDvyLbqJMtY0Ka0zHECsvdgZIY6QNVZus",
    authDomain: "bookstore-e-commerce.firebaseapp.com",
    projectId: "bookstore-e-commerce",
    storageBucket: "bookstore-e-commerce.appspot.com",
    messagingSenderId: "702715263751",
    appId: "1:702715263751:web:4cad6d9136fbade37063a2"
};

console.log('se conecto')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


products.forEach((product) => {
    addDoc(collection(db, 'products'), product)
        .then((docRef) =>{
            console.log(`Se agrego el documento con id: ${docRef.id}`)
        })
        .catch((err) => console.log(err))
})