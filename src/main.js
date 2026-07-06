gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
  },
});

tl.to("#yellow", {
  y: -300,
});