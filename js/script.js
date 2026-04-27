document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality
    const dropdownButtons = document.querySelectorAll('nav button[aria-haspopup="true"]');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const parent = button.parentElement;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close all other dropdowns
            document.querySelectorAll('nav div > div > div').forEach(div => {
                if (div !== parent) {
                    div.removeAttribute('data-open');
                    div.querySelector('button').setAttribute('aria-expanded', 'false');
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

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdownButtons.forEach(button => {
            button.setAttribute('aria-expanded', 'false');
            button.parentElement.removeAttribute('data-open');
        });
    });

    // Mobile menu toggle (if added)
    const menuToggle = document.getElementById('menu-toggle-btn');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const nav = document.querySelector('nav[role="navigation"]');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            // In CSS we'd handle the visibility of nav based on this if needed
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
});
