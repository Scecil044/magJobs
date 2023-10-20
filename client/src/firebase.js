// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "magjobs-f1258.firebaseapp.com",
  projectId: "magjobs-f1258",
  storageBucket: "magjobs-f1258.appspot.com",
  messagingSenderId: "407126703674",
  appId: "1:407126703674:web:33febcc6f29654b0ac7f03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
