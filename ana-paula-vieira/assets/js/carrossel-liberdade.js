'use strict';

// ==========================================
// Carrossel de Depoimentos — Liberdade Sistêmica
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.testimonials-carousel');
  const track = document.querySelector('.testimonials-grid');
  const cards = document.querySelectorAll('.testimonial-card');
  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');

  // Guard — sai silenciosamente se os elementos não existirem
  if (!carousel || !track || !cards.length || !btnNext || !btnPrev) return;

  const AUTO_PLAY_DELAY = 4000;

  let index = 0;
  let autoPlayTimer = null;

  // ========================================
  // Utilitários
  // ========================================

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function getCardWidth() {
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  // ========================================
  // Navegação
  // ========================================

  function goTo(newIndex) {
    index = Math.min(Math.max(newIndex, 0), getMaxIndex());
    track.style.transform = `translateX(-${getCardWidth() * index}px)`;
  }

  function next() {
    goTo(index >= getMaxIndex() ? 0 : index + 1);
  }

  function prev() {
    goTo(index <= 0 ? getMaxIndex() : index - 1);
  }

  // ========================================
  // Autoplay
  // ========================================

  function startAutoPlay() {
    if (autoPlayTimer) return; // evita múltiplos intervalos simultâneos
    autoPlayTimer = setInterval(next, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }

  // ========================================
  // Eventos
  // ========================================

  btnNext.addEventListener('click', () => {
    next();
    stopAutoPlay();
    startAutoPlay();
  });

  btnPrev.addEventListener('click', () => {
    prev();
    stopAutoPlay();
    startAutoPlay();
  });

  // Pausa no container inteiro, não só no track
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Resize com debounce para não disparar a cada pixel
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Corrige index caso o número de visíveis tenha aumentado
      index = Math.min(index, getMaxIndex());
      goTo(index);
    }, 150);
  });

  // ========================================
  // Init
  // ========================================

  goTo(0);
  startAutoPlay();
});