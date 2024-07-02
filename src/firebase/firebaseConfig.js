// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKNJjYnD3JNyLXPcXADYY_Eu4Tvt9NlJk",
  authDomain: "daytracker-1c20f.firebaseapp.com",
  projectId: "daytracker-1c20f",
  storageBucket: "daytracker-1c20f.appspot.com",
  messagingSenderId: "834284511138",
  appId: "1:834284511138:web:c9ea13aced94d58a811cfb",
};
// console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;