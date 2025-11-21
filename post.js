import { 
  db, 
  collection, 
  addDoc, 
  serverTimestamp 
} from "./firebase.js";

import { 
  getAuth, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, user => {

  if (!user) {
    alert("Debes iniciar sesión para publicar.");
    window.location.href = "login.html";
    return;
  }

  const publishBtn = document.getElementById("publishBtn");

  publishBtn.addEventListener("click", async () => {
    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!title || !desc) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        desc,
        price,
        status: "pending",
        createdAt: serverTimestamp(),
        userId: user.uid
      });

      alert("Publicación enviada correctamente. Espera aprobación.");
      window.location.href = "listing.html";

    } catch (error) {
      console.error("Error al publicar:", error);
      alert("Error al guardar la publicación.");
    }
  });

});
