import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo0retO_xJbvmhAYt7AlYYSpZ8SS0cJmQ",
  authDomain: "clone-69bed.firebaseapp.com",
  projectId: "clone-69bed",
  storageBucket: "clone-69bed.appspot.com",
  messagingSenderId: "102246678337",
  appId: "1:102246678337:web:47ab75f5d02381b5302bc0",
  measurementId: "G-RDBZ5722P2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
