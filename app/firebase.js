// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn2fvWKVnMs0nYS7JfOdWQVN04sTcwtgM",
  authDomain: "expense-tracker-68474.firebaseapp.com",
  projectId: "expense-tracker-68474",
  storageBucket: "expense-tracker-68474.appspot.com",
  messagingSenderId: "920919766157",
  appId: "1:920919766157:web:8838876e668e7282eb9ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)