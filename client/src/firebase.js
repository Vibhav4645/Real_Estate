// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-235f0.firebaseapp.com",
  projectId: "mern-estate-235f0",
  storageBucket: "mern-estate-235f0.appspot.com",
  messagingSenderId: "7777432494",
  appId: "1:7777432494:web:c5847b36bb5e0b35cd4e3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);