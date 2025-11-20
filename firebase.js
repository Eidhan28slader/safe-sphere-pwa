// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, collection, addDoc, serverTimestamp, 
  onSnapshot, query, orderBy, updateDoc, deleteDoc, doc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAEvBI8IKWzqc-yS-aTmAgRlGaUomfzY0",
  authDomain: "safe-sphere-29f3f.firebaseapp.com",
  projectId: "safe-sphere-29f3f",
  storageBucket: "safe-sphere-29f3f.appspot.com",
  messagingSenderId: "250192856440",
  appId: "1:250192856440:web:b6035ce3941955928d348d"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export
export { db, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, updateDoc, deleteDoc, doc };
