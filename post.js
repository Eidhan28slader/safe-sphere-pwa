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

function getSphereColor(score) {
    if (score >= 90) return "#00e676";     // verde brillante
    if (score >= 80) return "#69f0ae";     // verde claro
    if (score >= 65) return "#ffd600";     // amarillo
    if (score >= 40) return "#ff9100";     // naranja
    return "#ff5252";                      // rojo
}

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
       const selectedSecurity = document.getElementById("security-level").value;
const score = calculateSphereScore(selectedSecurity);
const color = getSphereColor(score);

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

    securityLevel: selectedSecurity,
    plusvalia: document.getElementById("plusvalia").value,

    sphereScore: score,
    sphereColor: color
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

