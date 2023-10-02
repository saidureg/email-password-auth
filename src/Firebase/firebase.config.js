// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQGli00rdsfKU5WSm7o4fbNomZmXPqOy4",
  authDomain: "auth-user-email-password.firebaseapp.com",
  projectId: "auth-user-email-password",
  storageBucket: "auth-user-email-password.appspot.com",
  messagingSenderId: "397127966502",
  appId: "1:397127966502:web:f65a7e6d373ad0637dabe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
