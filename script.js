// Animate sections on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".block").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
