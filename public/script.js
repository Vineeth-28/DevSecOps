// Navbar shadow on scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0px 4px 20px rgba(0,0,0,0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Reveal animation on scroll

const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .timeline-item, .cert-card"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";

      element.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach((element) => {
  element.style.opacity = "0";

  element.style.transform = "translateY(50px)";

  element.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);

// Typing effect

const title = document.querySelector(".hero-content h2");

const text = "Automation • Reliability • Scalability";

let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);
  }
}

title.innerHTML = "";

typeEffect();