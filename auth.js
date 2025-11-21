import { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "./firebase.js";

const registerForm = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginBtn");

// REGISTER
if (registerForm) {
    registerForm.addEventListener("click", async () => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            alert("Cuenta creada!");
            window.location.href = "post.html";
        } catch (e) {
            console.error(e);
            alert("Error al crear cuenta: " + e.message);
        }
    });
}

// LOGIN
if (loginForm) {
    loginForm.addEventListener("click", async () => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        try {
            await signInWithEmailAndPassword(auth, email, pass);
            alert("Inicio de sesión correcto!");
            window.location.href = "post.html";
        } catch (e) {
            console.error(e);
            alert("Error al iniciar sesión: " + e.message);
        }
    });
}

