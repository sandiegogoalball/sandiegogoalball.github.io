// Tailwind CSS Configuration
// This must run before the Tailwind CDN script processes the page
window.tailwind = {
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0B3C5D',
                    900: '#0B3C5D',
                    800: '#114a70',
                },
                gold: {
                    DEFAULT: '#F2A900',
                    500: '#F2A900',
                    600: '#d99800',
                },
                sky: {
                    DEFAULT: '#4AA3DF',
                    200: '#BAE1FF',
                },
                dark: '#111111'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

// Site-wide Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize external links accessibility
    initExternalLinks();

    // Set current year in footer
    initYear();

    // Initialize navigation highlighting
    highlightCurrentPage();
});

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('button[aria-label="Toggle Menu"]');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }
}

/**
 * Automatically handle external links for accessibility and security
 */
function initExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
        // Ensure rel="noopener noreferrer" for security
        link.setAttribute('rel', 'noopener noreferrer');

        // Add "(opens in new tab)" for screen readers if not already present
        const hasSRLabel = link.querySelector('.sr-only');
        const hasTextLabel = link.textContent.includes('(opens in new tab)');

        if (!hasSRLabel && !hasTextLabel) {
            const srText = document.createElement('span');
            srText.className = 'sr-only';
            srText.textContent = ' (opens in new tab)';
            link.appendChild(srText);
        }
    });
}

/**
 * Set the current year in any element with id="year"
 */
function initYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Highlights the current page in the navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-gold');
            link.classList.remove('text-navy');
            link.setAttribute('aria-current', 'page');
        }
    });
}
