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
  duration: 0.7,
}, "<");


tl.to("#green2", {
  y: -190,
  duration: 1,
},"<");

tl.to(["#blue"], {
  y: -60,
  duration: 0.2,
}, "<");


tl.to("#green", {
  y: -105,
  duration: 0.3,
}, "<");


tl.to("#red", {
  y: -320,
  duration: 1.3,
}, "<");

tl.to(["#green2"], {
  y: -370,
 duration: 0.2,
}), "<";


tl.to("#yellow", {
  y: -420,
  duration: 0.8,
},"<");

tl.to("#text", {
  y: -150,
  duration: 1,
}, "<");

tl.to("#hero-cover", {
  y: -300,
  duration: 1,
}, "<");


