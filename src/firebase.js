import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// İnitialize firebase store
const firebaseConfig = {
    apiKey: "AIzaSyCqOlOE9NyOFGZQlPuXgnJY3gZyTc1m1fw",
    authDomain: "instagram-efcc3.firebaseapp.com",
    projectId: "instagram-efcc3",
    storageBucket: "instagram-efcc3.firebasestorage.app",
    messagingSenderId: "597153515469",
    appId: "1:597153515469:web:96175cd0389bb1dc396684",
    measurementId: "G-8FKLMRHHX7"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);