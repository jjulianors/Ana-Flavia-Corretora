let slideIndex = 0;
let slides, thumbs; // Estas variáveis serão inicializadas pelo detalhes-imovel.js

function showSlide(n) {
  if (!slides || slides.length === 0) return; // Garante que slides existe

  slides.forEach((img, index) => {
    img.style.display = index === n ? "block" : "none";
  });
  if (thumbs && thumbs.length > 0) {
    // Verifica se thumbs existe
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === n);
    });
  }
}

function nextSlide() {
  if (!slides || slides.length === 0) return;
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  if (!slides || slides.length === 0) return;
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function setSlide(n) {
  if (!slides || slides.length === 0) return;
  slideIndex = n;
  showSlide(slideIndex);
}

// Lightbox (imagem ampliada)
let lightboxImages = []; // Esta variável será preenchida pelo detalhes-imovel.js
let currentLightboxIndex = 0;

function openLightbox(index) {
  // lightboxImages já é populado pelo detalhes-imovel.js
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

// O DOMContentLoaded listener original do script.js não é mais necessário
// para inicializar slides/thumbs, pois detalhes-imovel.js fará isso.
// No entanto, a parte do lightbox que torna as imagens clicáveis ainda é útil.
// Vamos garantir que ele funcione com as imagens dinâmicas.
document.addEventListener("DOMContentLoaded", () => {
  // A inicialização de slides e thumbs para o carrossel é feita em detalhes-imovel.js
  // A lógica de tornar as imagens clicáveis para o lightbox é integrada no detalhes-imovel.js
  // ao criar as imagens do carrossel.
});

// A função showSlide(slideIndex) no final do script.js original
// não é mais necessária aqui, pois detalhes-imovel.js a chamará
// após carregar as imagens.
