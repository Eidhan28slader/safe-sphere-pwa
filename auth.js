import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "safe-sphere.firebaseapp.com",
  projectId: "safe-sphere",
  storageBucket: "safe-sphere.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER
document.getElementById("registerBtn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Cuenta creada!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
});

// LOGIN
document.getElementById("loginBtn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Sesión iniciada");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
});
