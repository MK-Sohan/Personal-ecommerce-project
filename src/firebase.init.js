// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSCGTiy8fdkrRgAhpqXM92tOeVLO46C1E",
  authDomain: "mk-ecommerce-14c56.firebaseapp.com",
  projectId: "mk-ecommerce-14c56",
  storageBucket: "mk-ecommerce-14c56.appspot.com",
  messagingSenderId: "716700223881",
  appId: "1:716700223881:web:49c9da4e074a3047f93958",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
