gsap.registerPlugin(ScrollTrigger);


// Desktop Animationn

const desktopTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop-hero",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true, 
    invalidateOnRefresh:true                                                                                                                                                
  },
});

desktopTl.to("#pink", {
  y: -19,
  duration: 0.2,
}, "<")

.to("#text-desktop", {
  y: -480,
  duration: 1,
}, "<")

.to("#green2", {
  y: -190,
  duration: 1,
},"<")



.to(["#blue"], {
  y: -60,
  duration: 0.2,
}, "<")


.to("#green", {
  y: -105,
  duration: 0.3,
}, "<")



.to("#red", {
  y: -320,
  duration: 1.3,
}, "<")

.to(["#green2"], {
  y: -370,
 duration: 0.2,
}, "<")


.to("#yellow", {
  y: -420,
  duration: 0.3,
},"<")



.to("#hero-cover", {
  y: -180,
  duration: 1,
}, "<");







// // The mobile hero section Animation


const mobileTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".mobile-hero",
    start:"top top",
    end:"+=1000",
    scrub:true,
    pin:true,
    invalidateOnRefresh:true
  }
});


mobileTl.to("#pink-mobile", {
 y:-55,
 duration: 0.5,
})

.to("#text-mobile", {
  y: -250,
  duration: 1,
}, "<")

.to(["#blue-mobile","#green-mobile"],{
 y:-80,
 duration: 0.6,
},"<")





.to("#green2-mobile",{
 y:-150,
 duration: 1,
},"<")


.to("#red-mobile",{
 y:-200,
 duration: 1.2,
}, "<")



.to("#yellow-mobile",{
 y:-100,
 duration: 1.2,
},)

.to("#hero-cover-mobile", {
  y: -227,
  duration: 1,
}, "<");



window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});