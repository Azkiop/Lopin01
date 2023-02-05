const firebase = require('firebase')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUNKug43iGfu471T2btUt1jX9xQ5nXyI",
  authDomain: "lopin-firebase.firebaseapp.com",
  projectId: "lopin-firebase",
  storageBucket: "lopin-firebase.appspot.com",
  messagingSenderId: "1077596643185",
  appId: "1:1077596643185:web:6f3f53021c629d442aa0d0",
  measurementId: "G-0PTQZTXEDL"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var btn = document.getElementById('btnSingUp');

btn.onclick = function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(name, email, password);
}
