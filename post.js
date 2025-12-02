import { 
    auth, 
    db, 
    collection, 
    addDoc, 
    serverTimestamp,
    onAuthStateChanged 
} from "./firebase.js";

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const publishBtn = document.getElementById("publishBtn");

const postsRef = collection(db, "posts");

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
});

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
        function calculateSphereScore(security) {
    switch (security) {
        case "Very Safe": return 95;
        case "Safe": return 85;
        case "Average": return 70;
        case "Low Safety": return 50;
        case "Unsafe": return 20;
        default: return 60;
    }
}
        await addDoc(postsRef, {
    title,
    desc,
    price,
    status: "pending",
    createdAt: serverTimestamp(),
    userId: currentUser.uid,

    nearby: {
        miniMarket: document.getElementById("near-mini").checked,
        supermarket: document.getElementById("near-super").checked,
        pharmacy: document.getElementById("near-pharma").checked,
        busStop: document.getElementById("near-bus").checked,
        university: document.getElementById("near-uni").checked,
        hospital: document.getElementById("near-hosp").checked
    },

    securityLevel: document.getElementById("security-level").value,
    plusvalia: document.getElementById("plusvalia").value,

    sphereScore: calculateSphereScore(
        document.getElementById("security-level").value
    )
});
        alert("Post successfully published!");

        titleInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

    } catch (e) {
        console.error(e);
        alert("Error publishing post. Check console.");
    }
});

