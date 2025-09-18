// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHrfL33kqvnx91UqnyL9J3I61Sf8CYK0A",
  authDomain: "visozo-libros.firebaseapp.com",
  projectId: "visozo-libros",
  storageBucket: "visozo-libros.firebasestorage.app",
  messagingSenderId: "968602995578",
  appId: "1:968602995578:web:e6e0526fc31597e9a164c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)