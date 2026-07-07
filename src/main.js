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

tl.to("#pink", {
  y: -19,
  duration: 1,
}, "<");


tl.to("#green2", {
  y: -190,
  duration: 0.6,
},"<");

tl.to(["#blue","#green","#red"], {
  y: -60,
  duration: 1,
}, "<");

tl.to(["#red", "#green2"], {
  y: -370,
 duration: 1,
}), "<";


tl.to("#green", {
  y: -105,
  duration: 1,
}, "<");
tl.to("#yellow", {
  y: -370,
  duration: 1,
},"<");





tl.to("#text", {
  y: -150,
  duration: 1,
}, "<");





