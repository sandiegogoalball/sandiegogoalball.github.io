/**
 * San Diego Goalball - Main JavaScript
 * Handles common functionality across all pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initCopyrightYear();
    initActiveNavigation();
    initContactForm();
});

/**
 * Toggles the mobile navigation menu.
 */
function initMobileMenu() {
    const menuButton = document.querySelector('button[aria-label="Toggle Menu"]');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            const isHidden = mobileNav.classList.toggle('hidden');
            menuButton.setAttribute('aria-expanded', !isHidden);
        });
    }
}

/**
 * Updates the copyright year in the footer.
 */
function initCopyrightYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Highlights the current page in the navigation menus.
 */
function initActiveNavigation() {
    // Get current filename from URL
    let currentPath = window.location.pathname.split('/').pop();

    // Default to index.html if path is empty or /
    if (!currentPath || currentPath === '/') {
        currentPath = 'index.html';
    }

    const navLinks = document.querySelectorAll('nav a, #mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if link matches current path
        if (linkPath === currentPath) {
            link.setAttribute('aria-current', 'page');

            // Apply active styles based on whether it's desktop or mobile nav
            if (link.closest('nav')) {
                // Desktop navigation active state
                link.classList.add('text-gold', 'border-b-2', 'border-gold', 'pb-1');
                link.classList.remove('text-navy', 'hover:text-gold');
            } else {
                // Mobile navigation active state
                link.classList.add('text-gold');
                link.classList.remove('text-navy');
            }
        } else {
            // Ensure non-active links have correct base classes (in case they were changed)
            if (link.closest('nav')) {
                link.classList.add('text-navy', 'hover:text-gold');
                link.classList.remove('text-gold', 'border-b-2', 'border-gold', 'pb-1');
            } else {
                link.classList.add('text-navy');
                link.classList.remove('text-gold');
            }
        }
    });
}

/**
 * Handles the contact form submission.
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            setTimeout(() => {
                alert('Thank you for your message! Since this is a student project, please email us directly at info@sdgoalball.org for any real inquiries.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                contactForm.reset();
            }, 1000);
        });
    }
}
