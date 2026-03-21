'use strict';

// ==========================================
// Privacy Modal - JavaScript
// ==========================================

class PrivacyModal {
    constructor() {
        this.modal = document.getElementById('privacyModal');
        this.securityBadge = document.querySelector('.security-badge');
        this.closeBtn = document.getElementById('closeModal');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.saveBtn = document.getElementById('savePreferencesBtn');
        this.analyticsCookies = document.getElementById('analyticsCookies');
        this.marketingCookies = document.getElementById('marketingCookies');

        this.STORAGE_KEY = 'privacyPreferences';

        this.init();
    }

    init() {
        if (!this.modal) return;

        this.attachEventListeners();

        // Aplica preferências já salvas ao carregar a página
        const saved = this.getSavedPreferences();
        if (saved) this.applyPreferences(saved);
    }

    attachEventListeners() {
        // Abre o modal ao clicar no badge de segurança
        if (this.securityBadge) {
            this.securityBadge.addEventListener('click', () => this.open());
        }

        // Botão fechar (X) e Cancelar — apenas fecham
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        if (this.cancelBtn) this.cancelBtn.addEventListener('click', () => this.close());

        // Botão salvar preferências
        if (this.saveBtn) {
            this.saveBtn.addEventListener('click', () => this.savePreferences());
        }

        // Fecha ao clicar no overlay fora do container
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        // Fecha com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) this.close();
        });
    }

    open() {
        this.modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Carrega preferências salvas nos toggles ao abrir
        const saved = this.getSavedPreferences();
        if (saved) {
            if (this.analyticsCookies) this.analyticsCookies.checked = saved.analytics ?? false;
            if (this.marketingCookies) this.marketingCookies.checked = saved.marketing ?? false;
        }
    }

    close() {
        this.modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    isOpen() {
        return this.modal.classList.contains('active');
    }

    savePreferences() {
        const preferences = {
            essential: true,
            analytics: this.analyticsCookies?.checked ?? false,
            marketing: this.marketingCookies?.checked ?? false,
            savedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences));
            this.applyPreferences(preferences);
            this.close();
            this.showToast('Preferências salvas com sucesso!', 'success');
        } catch {
            this.showToast('Erro ao salvar preferências. Tente novamente.', 'error');
        }
    }

    getSavedPreferences() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    }

    applyPreferences(preferences) {
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            if (preferences.analytics) {
                gtag('consent', 'update', { analytics_storage: 'granted' });
            } else {
                gtag('consent', 'update', { analytics_storage: 'denied' });
            }
        }

        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            if (preferences.marketing) {
                fbq('consent', 'grant');
            } else {
                fbq('consent', 'revoke');
            }
        }
    }

    // Toast de feedback ao salvar
    showToast(message, type = 'success') {
        // Remove toast anterior se ainda existir
        document.querySelector('.privacy-toast')?.remove();

        const toast = document.createElement('div');
        toast.className = 'privacy-toast';
        toast.textContent = message;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: type === 'success' ? '#284703' : '#c0392b',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.9rem',
            zIndex: '99999',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        document.body.appendChild(toast);

        // Fade in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => { toast.style.opacity = '1'; });
        });

        // Fade out e remove após 3s
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// ==========================================
// Init
// ==========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new PrivacyModal());
} else {
    new PrivacyModal();
}