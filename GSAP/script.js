var position = "left";

function handleAnimate() {
  if (position === "left") {
    gsap.to(".box", { x: 200, duration: 2 });
    position = "right";
  } else {
    gsap.to(".box", { x: -200, duration: 2 });
    position = "left";
  }
}
