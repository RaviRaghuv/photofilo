
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHa7JP0Tnmo_AdvXVpFbfZqzNCuXZaYJo",
  authDomain: "photofilo-app.firebaseapp.com",
  projectId: "photofilo-app",
  storageBucket: "photofilo-app.appspot.com",
  messagingSenderId: "176238600043",
  appId: "1:176238600043:web:558b73d0a4621e9cd7f62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
