const button = document.getElementById("interactiveButton");

button.addEventListener("mouseover", () => {
  gsap.to(button, { duration: 0.5, scale: 1.1 });
});

button.addEventListener("mouseout", () => {
  gsap.to(button, { duration: 0.5, scale: 1 });
});

button.addEventListener("click", () => {
  gsap.to(button, { duration: 1, rotation: 360 });
});