const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const cards = Array.from(document.querySelector('.card-stack').children);

const tl = gsap.timeline({ 
    scrollTrigger: {
        trigger: ".card-container",
        start: "top-=100 top",
        end: "center-=450 top",
        markers: false,
        scrub: 1,
    }
});

tl.to(cards[1], { y: -150 })
.to(cards[2], { y: -150 }, "<")
.to(cards[3], { y: -150 }, "<")
.to(cards[2], { y: -300 })
.to(cards[3], { y: -300 }, "<")
.to(cards[3], { y: -450 })



  



