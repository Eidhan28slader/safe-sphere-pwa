import { db, collection, addDoc, serverTimestamp } from "./firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Auth
const auth = window.auth;

// DOM Elements
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const publishBtn = document.getElementById("publishBtn");

// Collection reference
const postsRef = collection(db, "posts");

// Publish button action
publishBtn.addEventListener("click", async () => {

    const user = auth.currentUser;

    // 🔐 Si no está logueado → redirigir al login
    if (!user) {
        alert("Debes iniciar sesión para publicar.");
        window.location.href = "login.html"; 
        return;
    }

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = priceInput.value.trim();

    if (!title || !description) {
        alert("Title and description are required.");
        return;
    }

    try {
        await addDoc(postsRef, {
            title,
            description,
            price: price || null,
            createdAt: serverTimestamp(),
            userId: user.uid
        });

        alert("Post successfully published!");

        titleInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error publishing post. Check the console.");
    }
});


