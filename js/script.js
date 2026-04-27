document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality for Mobile & Screen Readers
    const dropdownButtons = document.querySelectorAll('.nav-item-dropdown > button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const parent = button.parentElement;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close all other dropdowns
            document.querySelectorAll('.nav-item-dropdown').forEach(item => {
                if (item !== parent) {
                    item.removeAttribute('data-open');
                    const otherBtn = item.querySelector('button');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current dropdown
            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                parent.removeAttribute('data-open');
            } else {
                button.setAttribute('aria-expanded', 'true');
                parent.setAttribute('data-open', 'true');
            }

            e.stopPropagation();
        });
    });

    // Close dropdowns when clicking outside or pressing Escape
    const closeAllDropdowns = () => {
        document.querySelectorAll('.nav-item-dropdown').forEach(item => {
            item.removeAttribute('data-open');
            const btn = item.querySelector('button');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    };

    document.addEventListener('click', closeAllDropdowns);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });

    // Handle focus loss from dropdowns (Tab out)
    document.querySelectorAll('.nav-item-dropdown').forEach(item => {
        item.addEventListener('focusout', (e) => {
            // Check if the new focused element is outside the dropdown
            if (!item.contains(e.relatedTarget)) {
                item.removeAttribute('data-open');
                const btn = item.querySelector('button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle-btn');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;
            menuToggle.setAttribute('aria-expanded', newState);
            document.body.classList.toggle('nav-open', newState);
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contrast Toggle
    const contrastToggle = document.getElementById('contrast-toggle');
    if (contrastToggle) {
        contrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            const isHighContrast = document.body.classList.contains('high-contrast');
            contrastToggle.setAttribute('aria-pressed', isHighContrast);
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });
});
