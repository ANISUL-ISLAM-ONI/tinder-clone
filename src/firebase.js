// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_mkRM7BVD7KWN45btjYKPqyaJDmgxjDc",
  authDomain: "tinder-clone-oni.firebaseapp.com",
  projectId: "tinder-clone-oni",
  storageBucket: "tinder-clone-oni.appspot.com",
  messagingSenderId: "830613010484",
  appId: "1:830613010484:web:4989de8318d542ef1cb261",
  measurementId: "G-PSPY9Z09BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;