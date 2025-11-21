import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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

// AUTH
const auth = getAuth(app);

// DB
const db = getFirestore(app);

// EXPORTS
export { 
    auth,
    db,
    collection,
    addDoc,
    serverTimestamp,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
};


