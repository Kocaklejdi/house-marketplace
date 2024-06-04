// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_FIREBASE,
  authDomain: "house-marketplace-app-720d3.firebaseapp.com",
  projectId: "house-marketplace-app-720d3",
  storageBucket: "house-marketplace-app-720d3.appspot.com",
  messagingSenderId: "828800523070",
  appId: "1:828800523070:web:28459a81f592d5d32e6a6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
