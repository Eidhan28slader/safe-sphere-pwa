// ----- FIREBASE.JS (FINAL) -----

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore, collection, addDoc, updateDoc, deleteDoc, doc,
  serverTimestamp, onSnapshot, query, orderBy, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAEvBI81KWzqc-yS-aTmAgRIGaUomfzY0",
  authDomain: "safe-sphere-29f3f.firebaseapp.com",
  projectId: "safe-sphere-29f3f",
  storageBucket: "safe-sphere-29f3f.firebasestorage.app",
  messagingSenderId: "250192856440",
  appId: "1:250192856440:web:b6035ce3941955928d348d"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// EXPORTAR FUNCIONES
export {
  collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp,
  onSnapshot, query, orderBy, getDocs,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
};
// ----- FIREBASE.JS (FINAL) -----