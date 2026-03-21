'use strict';

// ==========================================
// Liberdade Sistêmica - JavaScript
// ==========================================

// ==========================================
// FAQ Accordion
// ==========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Fecha todos os outros itens abertos
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });

            // Abre/fecha o item clicado
            item.classList.toggle('active');
        });
    });
}

// ==========================================
// Smooth Scroll
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// Header — efeito ao rolar
// ==========================================

function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.pageYOffset > 100);
    });
}

// ==========================================
// Cards — animação de entrada ao rolar
// ==========================================

function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.feeling-card, .benefit-card, .testimonial-card, .how-work-card'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // observa apenas uma vez
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// ==========================================
// Analytics
// ==========================================

function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }

    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
}

function initCTATracking() {
    document.querySelectorAll('.btn-primary-large, .btn-secondary-large, .btn-cta, .cta-btn-main').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_text: btn.textContent.trim(),
                page: 'liberdade-sistemica'
            });
        });
    });
}

// ==========================================
// Init
// ==========================================

function init() {
    initFAQ();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initCTATracking();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}