import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUdL7iIlfr2h7WjBXYnL4kkm7S20EngG4",
  authDomain: "clone-1d17e.firebaseapp.com",
  projectId: "clone-1d17e",
  storageBucket: "clone-1d17e.appspot.com",
  messagingSenderId: "532210464429",
  appId: "1:532210464429:web:c39416d7d3e64f4d4cf824"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
