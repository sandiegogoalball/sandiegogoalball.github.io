(function() {
    // Accessibility Widget Script
    const state = {
        highContrast: localStorage.getItem('a11y-high-contrast') === 'true',
        largeText: localStorage.getItem('a11y-large-text') === 'true',
        dyslexicFont: localStorage.getItem('a11y-dyslexic-font') === 'true',
        panelOpen: false
    };

    function applyState() {
        document.body.classList.toggle('a11y-high-contrast', state.highContrast);
        document.body.classList.toggle('a11y-text-large', state.largeText);
        document.body.classList.toggle('a11y-dyslexic', state.dyslexicFont);

        const highContrastBtn = document.getElementById('a11y-toggle-contrast');
        const largeTextBtn = document.getElementById('a11y-toggle-text');
        const dyslexicFontBtn = document.getElementById('a11y-toggle-dyslexic');

        if (highContrastBtn) highContrastBtn.classList.toggle('active', state.highContrast);
        if (largeTextBtn) largeTextBtn.classList.toggle('active', state.largeText);
        if (dyslexicFontBtn) dyslexicFontBtn.classList.toggle('active', state.dyslexicFont);
    }

    function toggleMode(mode) {
        state[mode] = !state[mode];
        localStorage.setItem(`a11y-${mode.replace(/([A-Z])/g, "-$1").toLowerCase()}`, state[mode]);
        applyState();
    }

    function init() {
        // Create widget HTML
        const widgetHtml = `
            <div class="a11y-widget" id="a11y-widget">
                <button class="a11y-toggle" id="a11y-toggle-panel" aria-label="Accessibility Options" aria-expanded="false" aria-controls="a11y-panel">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="a11y-panel" id="a11y-panel" role="region" aria-labelledby="a11y-heading">
                    <h2 id="a11y-heading">Accessibility Options</h2>
                    <div class="a11y-options">
                        <button class="a11y-option" id="a11y-toggle-contrast">
                            High Contrast
                            <span class="status-icon"></span>
                        </button>
                        <button class="a11y-option" id="a11y-toggle-text">
                            Large Text
                            <span class="status-icon"></span>
                        </button>
                        <button class="a11y-option" id="a11y-toggle-dyslexic">
                            Dyslexic Font
                            <span class="status-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHtml);

        const toggleBtn = document.getElementById('a11y-toggle-panel');
        const panel = document.getElementById('a11y-panel');
        const highContrastBtn = document.getElementById('a11y-toggle-contrast');
        const largeTextBtn = document.getElementById('a11y-toggle-text');
        const dyslexicFontBtn = document.getElementById('a11y-toggle-dyslexic');

        toggleBtn.addEventListener('click', () => {
            state.panelOpen = !state.panelOpen;
            panel.classList.toggle('open', state.panelOpen);
            toggleBtn.setAttribute('aria-expanded', state.panelOpen);
        });

        highContrastBtn.addEventListener('click', () => toggleMode('highContrast'));
        largeTextBtn.addEventListener('click', () => toggleMode('largeText'));
        dyslexicFontBtn.addEventListener('click', () => toggleMode('dyslexicFont'));

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            const widget = document.getElementById('a11y-widget');
            if (state.panelOpen && !widget.contains(e.target)) {
                state.panelOpen = false;
                panel.classList.remove('open');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.panelOpen) {
                state.panelOpen = false;
                panel.classList.remove('open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.focus();
            }
        });

        applyState();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
