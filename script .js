const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const surprise = document.getElementById("surprise");

openBtn.onclick = () => {
  card.classList.add("hidden");
  surprise.classList.remove("hidden");
  startHearts();
};

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "🍫❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 16 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
