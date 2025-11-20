// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, serverTimestamp, onSnapshot, orderBy, query 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { 
  getAuth, onAuthStateChanged, signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyDAEvBI81KWzqc-yS-aTmAgRIGaUomfzY0",
  authDomain: "safe-sphere-29f3f.firebaseapp.com",
  projectId: "safe-sphere-29f3f",
  storageBucket: "safe-sphere-29f3f.appspot.com",
  messagingSenderId: "250192856440",
  appId: "1:250192856440:web:b6035ce3941955928d348d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Auth
export const auth = getAuth(app);

// Export Firestore functions
export { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query };

// Export Auth functions
export { onAuthStateChanged, signInWithEmailAndPassword };
