// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtRX_vYM6ka7v_AV8NvisYROUXRZunwUU",
  authDomain: "smart-environment-e8c0c.firebaseapp.com",
  databaseURL: "https://smart-environment-e8c0c-default-rtdb.firebaseio.com",
  projectId: "smart-environment-e8c0c",
  storageBucket: "smart-environment-e8c0c.appspot.com",
  messagingSenderId: "134053234333",
  appId: "1:134053234333:web:be747f641c84a0aea67674",
  measurementId: "G-P3C5TTGQZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export {database}