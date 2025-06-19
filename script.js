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
