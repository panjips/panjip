import Typed from "typed.js";
import confetti from "canvas-confetti";

const hamburger = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");
const confettiBtn = document.getElementById("confetti-btn");
const mobile = document.querySelectorAll("#mobile-item");
var myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = "0";
myCanvas.style.zIndex = "-1";
document.body.appendChild(myCanvas);

confettiBtn.addEventListener("click", () => {
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});

hamburger.addEventListener("click", () => {
  menu.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu.classList.add("hidden");
});

mobile.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.contains("hidden")
      ? menu.classList.remove("hidden")
      : menu.classList.add("hidden");
  });
});

const typed = new Typed("#typed-text", {
  strings: ["Panji Pusaka", "Tech Enthusiast", "Code Wizzard"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
