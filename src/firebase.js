import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHJu1cIh4bFRWm8bvMc2MvX0wMNf5ASLg",
    authDomain: "challenge-91502.firebaseapp.com",
    projectId: "challenge-91502",
    storageBucket: "challenge-91502.appspot.com",
    messagingSenderId: "141676104730",
    appId: "1:141676104730:web:5f4ddfbb24b122df94d5a3",
    measurementId: "G-FMZF1YJKMC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };