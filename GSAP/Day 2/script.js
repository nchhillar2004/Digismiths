gsap.from(".box", {
  scale: 0,
  stagger: 0.2,
  delay: 0.5,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  yoyo: true,
  delay: 1,
  repeat: -1,
});

// Assignment 2
gsap.to(".bounce", {
  x: 0,
  y: 150,
  ease: "bounce.out",
  duration: 1,
  delay: 0,
  repeat: -1,
});

gsap.to(".power", {
  x: 0,
  y: 150,
  ease: "power1.inOut",
  duration: 1,
  delay: 1,
  repeat: -1,
});

gsap.to(".elastic", {
  x: 0,
  y: 150,
  ease: "elastic.out(1, 0.3)",
  duration: 1,
  delay: 2,
  repeat: -1,
});

gsap.to(".back", {
  x: 0,
  y: 150,
  ease: "bounce.out",
  duration: 1,
  delay: 3,
  repeat: -1,
});

// Assignment 3
const timeline = gsap.timeline({ paused: true });

timeline
  .to(".mybox", {
    duration: 2,
    y: -200,
    ease: "bounce.out",
  })
  .to(".mybox", {
    duration: 2,
    x: -200,
    ease: "bounce.out",
  })
  .to(".mybox", {
    duration: 2,
    y: 0,
    ease: "bounce.out",
    onComplete() {
      timeline.reverse();
    },
  });
timeline.play();

// Assignment 4
var paths = [
  { x: 0, y: 0 },
  { x: 100, y: 100 },
  { x: 300, y: 0 },
  { x: 450, y: 200 },
  { x: 600, y: 0 },
];
gsap.to(".ball", {
  duration: 2,
  motionPath: {
    path: paths,
  },
  ease: "power1.inOut",
  onComplete() {
    gsap.to(".ball", {
      duration: 2,
      motionPath: {
        path: [
          { x: 600, y: 0 },
          { x: 450, y: 200 },
          { x: 300, y: 0 },
          { x: 100, y: 100 },
          { x: 0, y: 0 },
        ],
      },
      ease: "power1.inOut",
    });
  },
});

// Assignment 5
const timeline2 = gsap.timeline({ paused: true });

timeline2
  .to("#scene1", {
    duration: 2,
    y: -200,
    repeat: -1,
    ease: "bounce.out",
  })
  .to("#scene2", {
    duration: 2,
    x: -200,
    repeat: -1,
    ease: "bounce.out",
  });

document
  .getElementById("play")
  .addEventListener("click", () => timeline2.play());
document
  .getElementById("pause")
  .addEventListener("click", () => timeline2.pause());
document
  .getElementById("resume")
  .addEventListener("click", () => timeline2.resume());
document
  .getElementById("reverse")
  .addEventListener("click", () => timeline2.reverse());
