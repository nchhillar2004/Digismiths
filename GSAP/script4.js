gsap.to(".box1", {
  rotation: 360,
  duration: 2,
  onComplete() {
    gsap.to(".box2", {
      rotation: 360,
      duration: 2,
      onComplete() {
        gsap.to(".box3", {
          rotation: 360,
          duration: 2,
          onComplete() {
            gsap.to(".box4", {
              rotation: 360,
              duration: 2,
            });
          },
        });
      },
    });
  },
});
