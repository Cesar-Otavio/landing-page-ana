<!-- Privacy Modal -->
<div class="modal-overlay" id="privacyModal">
    <div class="modal-container">
        <div class="modal-header">
            <div class="modal-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V6L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2>Política de Privacidade</h2>
            </div>
            <button class="modal-close" id="closeModal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        
        <div class="modal-body">
            <p class="modal-description">Configure suas preferências de privacidade para melhorar sua experiência.</p>
            
            <div class="privacy-options">
                <!-- Cookies Essenciais -->
                <div class="privacy-item">
                    <div class="privacy-info">
                        <h3>Cookies Essenciais</h3>
                        <p>Necessários para o funcionamento básico do site.</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="essentialCookies" checked disabled>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <!-- Análises -->
                <div class="privacy-item">
                    <div class="privacy-info">
                        <h3>Análises</h3>
                        <p>Permite coletar dados anônimos para melhorar nosso serviço.</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="analyticsCookies">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <!-- Marketing -->
                <div class="privacy-item">
                    <div class="privacy-info">
                        <h3>Marketing</h3>
                        <p>Permite exibir conteúdo personalizado baseado em seus interesses.</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="marketingCookies">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
        
        <div class="modal-footer">
            <button class="btn-secondary" id="cancelBtn">Cancelar</button>
            <button class="btn-primary" id="savePreferencesBtn">Salvar Preferências</button>
        </div>
    </div>
</div>