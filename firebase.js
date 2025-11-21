import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "safe-sphere-29f3f.firebaseapp.com",
    projectId: "safe-sphere-29f3f",
    storageBucket: "safe-sphere-29f3f.appspot.com",
    messagingSenderId: "250192856440",
    appId: "1:250192856440:web:b6035ce394195928d348d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);   // 👈 ESTA ES LA INSTANCIA CORRECTA

export { db, auth, collection, addDoc, serverTimestamp };


