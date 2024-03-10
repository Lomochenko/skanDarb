console.clear();

const cards = gsap.utils.toArray(".card");
const cardsContainer = document.querySelector(".cards-container");

const horizontalTween = gsap.to(cardsContainer, {
  x: window.innerWidth - cardsContainer.scrollWidth - 50,
  duration: cards.length,
  ease: "none",
  scrollTrigger: {
    trigger: ".pin-panel",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});
cards.shift();

cards.forEach((card) =>
  gsap.to(card, {
    opacity: 1,
    scrollTrigger: {
      trigger: card,
      start: "left 90%",
      end: "center 90%",
      scrub: true,
      containerAnimation: horizontalTween,
      markers: false
    }
  })
);