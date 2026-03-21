'use strict';

// ==========================================
// Ana Paula Vieira - Main JavaScript
// ==========================================

// ==========================================
// Smooth Scroll
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==========================================
// Security Badge
// ==========================================

function initSecurityBadge() {
    const securityBadge = document.querySelector('.security-badge');

    if (!securityBadge) return;

    securityBadge.addEventListener('click', () => {
        securityBadge.style.animation = 'pulse 0.5s ease';

        setTimeout(() => {
            securityBadge.style.animation = '';
        }, 500);
    });
}

// ==========================================
// Card Shine Effect
// ==========================================

function initCardShine() {
    const cards = document.querySelectorAll('.card');

    if (!cards.length) return;

    // Remove a classe auto-shine ao entrar com o mouse
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.remove('auto-shine');
        });
    });

    // Brilho automático em intervalos aleatórios quando sem hover
    function scheduleAutoShine(card, delay) {
        setTimeout(() => {
            if (!card.matches(':hover')) {
                card.classList.remove('auto-shine');
                void card.offsetWidth; // força reflow para reiniciar a animação CSS
                card.classList.add('auto-shine');

                setTimeout(() => card.classList.remove('auto-shine'), 800);
            }

            scheduleAutoShine(card, 3000 + Math.random() * 2000);
        }, delay);
    }

    cards.forEach((card, i) => {
        scheduleAutoShine(card, 1500 + i * 900);
    });
}

// ==========================================
// Profile Image Parallax
// ==========================================

function initParallax() {
    const profileImage = document.querySelector('.profile-image');

    if (!profileImage) return;

    let rafId = null;

    window.addEventListener('scroll', () => {
        if (rafId) return; // throttle via requestAnimationFrame

        rafId = requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;

            // Aplica apenas enquanto está na área do hero
            if (scrolled < 300) {
                profileImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            } else {
                profileImage.style.transform = '';
            }

            rafId = null;
        });
    });
}

// ==========================================
// Cards — animação de entrada ao rolar
// ==========================================

function initCardObserver() {
    const cards = document.querySelectorAll('.card');

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // observa apenas uma vez
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));
}

// ==========================================
// Init
// ==========================================

function init() {
    initSmoothScroll();
    initSecurityBadge();
    initCardShine();
    initParallax();
    initCardObserver();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}