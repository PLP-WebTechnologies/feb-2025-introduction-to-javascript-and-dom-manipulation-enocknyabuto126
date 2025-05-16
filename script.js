<<<<<<< HEAD
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("changeTextBtn").textContent = "Text Changed!";
  document.body.style.backgroundColor = "#d1ffd6";
});

document.getElementById("doubleClickBtn").addEventListener("dblclick", () => {
  alert("Double-click detected! 🎉");
});

document.addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

const slideshow = document.getElementById("slideshow");
let images = [
  "https://via.placeholder.com/300/ffaaaa",
  "https://via.placeholder.com/300/aaffaa",
  "https://via.placeholder.com/300/aaaaff"
];
let current = 0;
setInterval(() => {
  current = (current + 1) % images.length;
  slideshow.src = images[current];
}, 3000);

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById(tab.dataset.target).classList.remove("hidden");
  });
});

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let feedback = "";

  if (password.length < 8) {
    feedback = "Password must be at least 8 characters long.";
  } else {
    feedback = `Thank you, ${name}! Your form is submitted.`;
  }

  document.getElementById("formFeedback").textContent = feedback;
});
=======
function changeText() {
  document.getElementById("main-title").textContent = "Text Changed with JavaScript!";
}

function changeStyle() {
  const intro = document.getElementById("intro-text");
  intro.style.color = "white";
  intro.style.backgroundColor = "#333";
  intro.style.padding = "10px";
  intro.style.borderRadius = "8px";
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically.";
  newPara.id = "dynamic-paragraph";
  document.getElementById("dynamic-container").appendChild(newPara);
}

function removeElement() {
  const para = document.getElementById("dynamic-paragraph");
  if (para) {
    para.remove();
  }
}
>>>>>>> 00e241c93976d85c55c3e87a9434876bf67b8414
