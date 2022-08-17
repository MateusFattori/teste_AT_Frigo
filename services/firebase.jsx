// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA0m8G6k3DRdwxHLeUQMx1IDACqrtkLvLw",
  authDomain: "at2-web.firebaseapp.com",
  projectId: "at2-web",
  storageBucket: "at2-web.appspot.com",
  messagingSenderId: "681669781048",
  appId: "1:681669781048:web:bcfd7b8389589d4071a8cd",
  measurementId: "G-W6KN72J4NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);