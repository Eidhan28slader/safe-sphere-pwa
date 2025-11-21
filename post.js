import { db, auth, collection, addDoc, serverTimestamp } from "./firebase.js";

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const publishBtn = document.getElementById("publishBtn");

const postsRef = collection(db, "posts");

publishBtn.addEventListener("click", async () => {

    console.log("AUTH:", auth); // 🔥 Debug
    console.log("CURRENT USER:", auth.currentUser); // 🔥 Debug

    const user = auth.currentUser;

    if (!user) {
        alert("Debes iniciar sesión para publicar.");
        window.location.href = "login.html";
        return;
    }

    const title = titleInput.value.trim();
    const desc = descriptionInput.value.trim();
    const price = priceInput.value.trim();

    if (!title || !desc) {
        alert("Título y descripción obligatorios.");
        return;
    }

    try {
        await addDoc(postsRef, {
            title,
            desc,
            price,
            status: "pending",
            userId: user.uid,
            createdAt: serverTimestamp()
        });

        alert("Publicación creada!");
        
        titleInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

    } catch (e) {
        console.error("ERROR AÑADIENDO:", e);
        alert("Error creando la publicación.");
    }
});

