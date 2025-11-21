import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// FIRESTORE
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// AUTH
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAEvBI8IKWzqc-yS-aTmAgRlGaUomfzY0",
    authDomain: "safe-sphere-29f3f.firebaseapp.com",
    projectId: "safe-sphere-29f3f",
    storageBucket: "safe-sphere-29f3f.appspot.com",
    messagingSenderId: "250192856440",
    appId: "1:250192856440:web:b6035ce3941955928d348d"
};

const app = initializeApp(firebaseConfig);

// AUTH + DB
const auth = getAuth(app);
const db = getFirestore(app);

// EXPORTACIONES
export {
    auth,
    db,
    // Auth
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    // Firestore
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    doc
};

