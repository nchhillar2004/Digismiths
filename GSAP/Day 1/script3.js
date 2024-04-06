gsap.to(".n", { rotation: 360, duration: 1 });
gsap.to(".i", {
  scaleY: -1,
  duration: 0.1,
  onComplete() {
    gsap.to(".i", { scaleY: 1, duration: 1 });
  },
});
gsap.to(".s", {
  duration: 0.1,
  y: -50,
  onComplete() {
    gsap.to(".s", { y: 0, duration: 1 });
  },
});
gsap.to(".h", {
  duration: 0.1,
  y: 50,
  onComplete() {
    gsap.to(".h", { y: 0, duration: 1 });
  },
});
gsap.to(".a", {
  duration: 0.1,
  y: -50,
  onComplete() {
    gsap.to(".a", { y: 0, duration: 1 });
  },
});
gsap.to(".n2", {
  duration: 0.1,
  y: 50,
  onComplete() {
    gsap.to(".n2", { y: 0, duration: 1 });
  },
});
gsap.to(".t", {
  duration: 0.1,
  x: 50,
  onComplete() {
    gsap.to(".t", { x: 0, duration: 1 });
  },
});

gsap.to(".c", { rotation: -360, duration: 1 });
gsap.to(".l", {
  duration: 0.1,
  y: 50,
  onComplete() {
    gsap.to(".l", { y: 0, duration: 1 });
  },
});
gsap.to(".r", {
  duration: 0.1,
  x: 50,
  onComplete() {
    gsap.to(".r", { x: 0, duration: 1 });
  },
});
