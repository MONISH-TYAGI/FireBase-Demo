// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAu6oiEZOyxN4ijxEBhDYYFKIgtZmUHq4k",
  authDomain: "fir-demo-2f89d.firebaseapp.com",
  projectId: "fir-demo-2f89d",
  storageBucket: "fir-demo-2f89d.appspot.com",
  messagingSenderId: "365447434577",
  appId: "1:365447434577:web:aba90aba9195a37fa2c370",
  measurementId: "G-BXYGTGMX56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
    users:firestore.collection('users')
}