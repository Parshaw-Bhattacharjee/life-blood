// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGzAYaVyYLw8cqs3vz0I5iXY6OuZvQjC0",
  authDomain: "life-blood-de5c6.firebaseapp.com",
  projectId: "life-blood-de5c6",
  storageBucket: "life-blood-de5c6.appspot.com",
  messagingSenderId: "692220667701",
  appId: "1:692220667701:web:76ed515d19ba9ba2120e7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
