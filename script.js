// --- 1. Smart Dark/Light System Tracker ---
const toggleButton = document.getElementById("theme-toggle");
const cachedTheme = localStorage.getItem("developer-portfolio-theme");

if (cachedTheme) {
  document.documentElement.setAttribute("data-theme", cachedTheme);
  toggleButton.textContent = cachedTheme === "dark" ? "☀️ Light" : "🌙 Dark";
} else {
  // Automatically detect device theme preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleButton.textContent = "☀️ Light";
  }
}

toggleButton.addEventListener("click", () => {
  let activeTheme = document.documentElement.getAttribute("data-theme");
  if (activeTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("developer-portfolio-theme", "light");
    toggleButton.textContent = "🌙 Dark";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("developer-portfolio-theme", "dark");
    toggleButton.textContent = "☀️ Light";
  }
});

// --- 2. Validation & Submission Interface ---
const cForm = document.getElementById("contact-form");
const fStatus = document.getElementById("form-status");

if (cForm) {
  cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fStatus.style.color = "var(--accent)";
    fStatus.textContent = "Processing transmission...";

    setTimeout(() => {
      fStatus.style.color = "#22c55e";
      fStatus.textContent = "Transmission successful! Connection established.";
      cForm.reset();
    }, 1200);
  });
}

// auto img slider
function startImageSliders() {
  // protita projrct er slider khoje ber kora
  const sliders = document.querySelectorAll(".project-slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    if (slides.length > 1) {
      setInterval(() => {
        slides[currentSlideIndex].classList.remove("active");

        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        slides[currentSlideIndex].classList.add("active");
      }, 3000);
    }
  });
}

document.addEventListener("DOMContentLoaded", startImageSliders);
