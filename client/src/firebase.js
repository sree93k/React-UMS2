// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEP_API_KEY,
  authDomain: "reactums.firebaseapp.com",
  projectId: "reactums",
  storageBucket: "reactums.appspot.com",
  messagingSenderId: "824367314070",
  appId: "1:824367314070:web:eed1379ada3cf74c5cfeb7"
};


export const app = initializeApp(firebaseConfig);