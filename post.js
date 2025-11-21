import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TU CONFIG DE FIREBASE
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "safe-sphere.firebaseapp.com",
  projectId: "safe-sphere",
  storageBucket: "safe-sphere.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// BOTÓN PUBLICAR
const publishBtn = document.getElementById("publishBtn");

publishBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;

  const user = auth.currentUser;
  if (!user) {
    alert("Debes iniciar sesión");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      title,
      description,
      price,
      uid: user.uid,
      createdAt: Date.now()
    });

    alert("Post creado correctamente 🎉");
  } catch (error) {
    console.error("Error al guardar:", error);
    alert("No se pudo publicar");
  }
});

