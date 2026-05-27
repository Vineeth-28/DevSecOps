const particleContainer = document.createElement("div");

particleContainer.classList.add("particle-container");

document.body.appendChild(particleContainer);

for (let i = 0; i < 50; i++) {
  const particle = document.createElement("span");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";

  particle.style.animationDuration = Math.random() * 5 + 3 + "s";

  particle.style.opacity = Math.random();

  particleContainer.appendChild(particle);
}