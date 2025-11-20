// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAEvBI81KWzqc-yS-aTmAgRIGaUomfzY0",
  authDomain: "safe-sphere-29f3f.firebaseapp.com",
  projectId: "safe-sphere-29f3f",
  storageBucket: "safe-sphere-29f3f.firebasestorage.app",
  messagingSenderId: "250192856440",
  appId: "1:250192856440:web:b6035ce3941955928d348d"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export
export { db, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy };

