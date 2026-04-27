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
    const mainNav = document.getElementById('main-nav-list');

    if (menuToggle && mainNav) {
        const navLinks = mainNav.querySelectorAll('a, button');
        const firstFocusable = menuToggle;
        const lastFocusable = navLinks[navLinks.length - 1];

        const toggleMenu = (state) => {
            const newState = typeof state === 'boolean' ? state : menuToggle.getAttribute('aria-expanded') !== 'true';
            menuToggle.setAttribute('aria-expanded', newState);
            document.body.classList.toggle('nav-open', newState);

            if (newState) {
                // When opening, we might want to focus the first element,
                // but usually, it's better to keep focus on the toggle or move to first link
                // navLinks[0].focus();
            } else {
                menuToggle.focus();
            }
        };

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        navLinks.forEach(link => {
            if (link.tagName === 'A') {
                link.addEventListener('click', () => toggleMenu(false));
            }
        });

        // Focus trapping
        const handleFocusTrap = (e) => {
            if (!document.body.classList.contains('nav-open')) return;

            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        };

        mainNav.addEventListener('keydown', handleFocusTrap);
        menuToggle.addEventListener('keydown', handleFocusTrap);

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
                toggleMenu(false);
            }
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
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
