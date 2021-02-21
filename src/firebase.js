import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBddvKU79-ku4F-pxZD_UtDfoUifsqjWhs",
    authDomain: "clone-f3f41.firebaseapp.com",
    projectId: "clone-f3f41",
    storageBucket: "clone-f3f41.appspot.com",
    messagingSenderId: "28929617223",
    appId: "1:28929617223:web:f6d73b12562fa4f31bb062",
    measurementId: "G-0HVX9FE1N4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }