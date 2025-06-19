let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(n) {
  slides.forEach((img, index) => {
    img.style.display = index === n ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});
