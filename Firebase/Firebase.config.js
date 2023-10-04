// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACkISoubg01z99XS-SQ44VcU7kJQBylSw",
  authDomain: "moohaa-miloon.firebaseapp.com",
  projectId: "moohaa-miloon",
  storageBucket: "moohaa-miloon.appspot.com",
  messagingSenderId: "1012653755604",
  appId: "1:1012653755604:web:d1352967d9f6aa4b1cff41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;