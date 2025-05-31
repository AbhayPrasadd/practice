import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc,setDoc,doc ,getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA_3YGUhreHbPhmghGDKczL4T77pcRmjNo",
    authDomain: "fir-5104f.firebaseapp.com",
    databaseURL: "https://fir-5104f-default-rtdb.firebaseio.com",
    projectId: "fir-5104f",
    storageBucket: "fir-5104f.firebasestorage.app",
    messagingSenderId: "871072338128",
    appId: "1:871072338128:web:3f1ead80651f56d5b3ced5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);  // ✅ Initialize Firestore

// ✅ Export Firestore
export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, db, collection, addDoc,setDoc,doc ,getDocs,storage};
