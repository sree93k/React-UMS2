// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEP_API_KEY,
  authDomain: "reactums.firebaseapp.com",
  projectId: "reactums",
  storageBucket: "reactums.appspot.com",
  messagingSenderId: "824367314070",
  appId: "1:824367314070:web:eed1379ada3cf74c5cfeb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);