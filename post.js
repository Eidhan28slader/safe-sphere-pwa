import { db, auth, collection, addDoc, serverTimestamp } from "./firebase.js";

// DOM Elements
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const publishBtn = document.getElementById("publishBtn");

const postsRef = collection(db, "posts");

publishBtn.addEventListener("click", async () => {

    const user = auth.currentUser;

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
            desc: description,    // 🔥 IMPORTANT: debes usar "desc" porque TODAS tus demás páginas leen "desc"
            price: price || null,
            status: "pending",    // 🔥 Admin necesita esto
            createdAt: serverTimestamp(),
            userId: user.uid
        });

        alert("Post successfully published!");

        titleInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error publishing post. Check console.");
    }
});


