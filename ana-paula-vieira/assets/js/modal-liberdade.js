'use strict';

// ==========================================
// Modal Raízes do Corpo - JavaScript
// ==========================================

class RaizesModal {
  constructor() {
    this.modal = document.getElementById('raizesModal');
    this.closeBtn = document.getElementById('closeRaizesModal');
    this.laterBtn = document.getElementById('raizesLaterBtn');
    this.whatsappBtn = document.querySelector('.raizes-btn-whatsapp');

    // Delay em ms antes de exibir o modal (3 segundos)
    this.DELAY = 3000;

    this.init();
  }

  init() {
    if (!this.modal) return;

    this.attachEventListeners();
    setTimeout(() => this.open(), this.DELAY);
  }

  attachEventListeners() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.laterBtn) {
      this.laterBtn.addEventListener('click', () => this.close());
    }

    if (this.whatsappBtn) {
      this.whatsappBtn.addEventListener('click', () => {
        this.trackEvent('raizes_whatsapp_click');
      });
    }

    // Fecha ao clicar fora do container (no overlay)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Fecha com tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) this.close();
    });
  }

  open() {
    this.modal.classList.add('active');
    document.body.classList.add('modal-open');
    this.trackEvent('raizes_modal_viewed');
  }

  close() {
    this.modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    this.trackEvent('raizes_modal_closed');
  }

  isOpen() {
    return this.modal.classList.contains('active');
  }

  trackEvent(eventName, eventData = {}) {
    const payload = { ...eventData, modal: 'raizes_corpo' };

    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, payload);
    }

    if (typeof fbq !== 'undefined') {
      fbq('track', eventName, payload);
    }
  }
}

// ==========================================
// Init
// ==========================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new RaizesModal());
} else {
  new RaizesModal();
}