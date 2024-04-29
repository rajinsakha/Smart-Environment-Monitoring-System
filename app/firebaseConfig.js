// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);
const database = getDatabase(app);
export {database}