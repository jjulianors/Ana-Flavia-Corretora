let slideIndex = 0;
let slides, thumbs;

function showSlide(n) {
  slides.forEach((img, index) => {
    img.style.display = index === n ? "block" : "none";
    thumbs[index].classList.toggle("active", index === n);
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

function setSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".carousel img.main");
  thumbs = document.querySelectorAll(".thumbnails img");
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setSlide(index));
  });
  showSlide(slideIndex);
});

// Lightbox (imagem ampliada)
let lightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(index) {
  lightboxImages = Array.from(document.querySelectorAll(".carousel img.main"));
  currentLightboxIndex = index;
  document.getElementById("lightbox-img").src = lightboxImages[index].src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  document.getElementById("lightbox-img").src =
    lightboxImages[currentLightboxIndex].src;
}

function prevLightbox() {
  currentLightboxIndex =
    (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  document.getElementById("lightbox-img").src =
    lightboxImages[currentLightboxIndex].src;
}

// Tornar imagens clicáveis
document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".carousel img.main");
  thumbs = document.querySelectorAll(".thumbnails img");

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setSlide(index));
  });

  slides.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(index));
  });

  showSlide(slideIndex);
});
