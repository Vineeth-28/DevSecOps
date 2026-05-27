gsap.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from(".typing-text", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero-buttons", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
});

gsap.utils.toArray(".skill-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: card,
    opacity: 0,
    y: 80,
    duration: 1,
    delay: index * 0.1,
  });
});

gsap.utils.toArray(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
    });
  });
});