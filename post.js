// ⬇️ PRIMERO: importar Firebase desde TU firebase.js
import { 
    auth, 
    db, 
    collection, 
    addDoc, 
    serverTimestamp,
    onAuthStateChanged 
} from "./firebase.js";

// ⬇️ DOM elements
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const publishBtn = document.getElementById("publishBtn");

const postsRef = collection(db, "posts");

// 🔥 Detecta si el usuario está logeado (MUY IMPORTANTE)
let currentUser = null;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
    console.log("AUTH STATE:", user);
});

// ⬇️ PUBLICAR
publishBtn.addEventListener("click", async () => {

    if (!currentUser) {
        alert("Debes iniciar sesión para publicar.");
        window.location.href = "login.html";
        return;
    }

    const title = titleInput.value.trim();
    const desc = descriptionInput.value.trim();
    const price = priceInput.value.trim();

    if (!title || !desc) {
        alert("Title and description required.");
        return;
    }

    try {
        await addDoc(postsRef, {
            title,
            desc,
            price,
            status: "pending",
            createdAt: serverTimestamp(),
            userId: currentUser.uid
        });

        alert("Post successfully published!");

        titleInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

    } catch (e) {
        console.error("Error:", e);
        alert("Error publishing post. Check console.");
    }
});
