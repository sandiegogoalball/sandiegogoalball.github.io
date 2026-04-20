// Tailwind CSS Configuration
// This must run before the Tailwind CDN script processes the page
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    // APH Inspired Palette: Navy and Teal
                    primary: '#002D56',
                    secondary: '#007A87',
                    accent: {
                        DEFAULT: '#007A87',
                        500: '#00A3AD',
                        600: '#007A87',
                        700: '#005F67',
                    },
                    black: '#000000',
                    white: '#FFFFFF',
                    dark: '#002D56',
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                }
            }
        }
    }
};

// Site Index for Search
const SITE_INDEX = [
    { title: "Home", url: "index.html", content: "San Diego County Goalball provides opportunities for blind and visually impaired athletes to compete in the Paralympic sport of goalball." },
    { title: "Our Story", url: "about.html", content: "Learn about our mission to empower athletes through sport, inclusion, and competitive excellence. Information on Matt Boyle." },
    { title: "History", url: "history.html", content: "Explore the origins of goalball from WWII rehabilitation to a premier Paralympic sport and our local San Diego roots." },
    { title: "What is Goalball?", url: "about-goalball.html", content: "Discover the rules, history, and unique mechanics of goalball, the premier Paralympic team sport." },
    { title: "Rules", url: "rules.html", content: "Detailed rules of goalball including court dimensions, audible ball mechanics, and common penalties." },
    { title: "Equipment", url: "equipment.html", content: "Learn about specialized goalball gear including audible balls, blackout eyeshades, and protective padding." },
    { title: "Practice Schedule", url: "schedule.html", content: "View our simplified practice schedule at Mission Valley YMCA and Stagecoach Park in Carlsbad." },
    { title: "Tournaments", url: "tournaments.html", content: "Information on major goalball tournaments like the Cascade Classic and USABA Nationals." },
    { title: "Past Events", url: "past-events.html", content: "View results and information from past tournaments, including the Cascade Classic." },
    { title: "Get Involved Overview", url: "get-involved.html", content: "Volunteer with us or support our athletes through donations and community outreach." },
    { title: "Volunteer", url: "volunteer.html", content: "Join our team as a goal judge, timer, scorer, or sighted guide. Training provided." },
    { title: "Our Sponsors", url: "sponsors.html", content: "Meet the organizations that support San Diego County Goalball and help empower our athletes." },
    { title: "Resources", url: "resources.html", content: "Explore Goalball resources, governing bodies like USABA and IBSA, and local San Diego organizations." },
    { title: "Contact", url: "contact.html", content: "Get in touch with Lori or Neal Meyers for inquiries about practices and volunteering." },
    { title: "Accessibility Statement", url: "accessibility-statement.html", content: "San Diego County Goalball's commitment to ensuring digital accessibility for people with disabilities." },
    { title: "Terms of Use", url: "terms-of-use.html", content: "Terms and conditions for using the San Diego County Goalball website." },
    { title: "Privacy Policy", url: "privacy-policy.html", content: "Privacy policy for San Diego County Goalball website." }
];

// Site-wide Logic
document.addEventListener('DOMContentLoaded', () => {
    // Inject required modals for accessibility and confirmation
    injectModals();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize desktop navigation accessibility
    initDesktopNav();

    // Initialize search
    initSearch();

    // Initialize footer search submit
    initFooterSearchSubmit();

    // Initialize external links accessibility
    initExternalLinks();

    // Initialize FAQ Accordion
    initFAQ();

    // Set current year in footer
    initYear();

    // Initialize navigation highlighting
    highlightCurrentPage();

    // Initialize Global Confirmation Modal
    initConfirmationModal();

    // Initialize Contrast Toggle
    initContrastToggle();

    // Initialize Cookie Consent
    initCookieConsent();
});

/**
 * Dynamically injects modals into the DOM to ensure they are present on all pages
 */
function injectModals() {
    if (!document.getElementById('contrast-modal')) {
        const contrastModal = document.createElement('dialog');
        contrastModal.id = 'contrast-modal';
        contrastModal.className = 'p-0 rounded-3xl shadow-2xl border-none max-w-lg w-full max-h-[90vh] overflow-hidden';
        contrastModal.innerHTML = `
            <div class="flex flex-col h-full max-h-[90vh]">
                <div class="bg-primary p-8 text-white relative flex-shrink-0">
                    <button id="close-contrast-modal" class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label="Close Modal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 class="text-3xl font-black uppercase mb-1">Display Settings</h2>
                    <p class="text-white/80 text-sm font-medium">Customize your viewing experience below.</p>
                </div>
                <div class="p-10 bg-white overflow-y-auto flex-grow space-y-10 text-black">
                    <section aria-labelledby="visual-options-heading">
                        <div class="flex items-center gap-2 mb-6 border-b-2 border-slate-100 pb-3">
                            <h3 id="visual-options-heading" class="text-lg font-black uppercase tracking-wider text-black">Visual Appearance</h3>
                        </div>
                        <div class="grid grid-cols-1 gap-3">
                            <button type="button" class="contrast-option flex items-center justify-between p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all" data-mode="standard">
                                <span class="font-black text-black uppercase text-sm">Standard Mode</span>
                                <div class="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-300"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all" data-mode="high-contrast">
                                <span class="font-black text-black uppercase text-sm">White on Black</span>
                                <div class="w-8 h-8 rounded-full bg-black border-2 border-white shadow-inner"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all" data-mode="high-contrast-yellow">
                                <span class="font-black text-black uppercase text-sm">Yellow on Black</span>
                                <div class="w-8 h-8 rounded-full bg-black border-2 border-yellow-400 shadow-inner"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all" data-mode="high-contrast-black-white">
                                <span class="font-black text-black uppercase text-sm">Black on White</span>
                                <div class="w-8 h-8 rounded-full bg-white border-2 border-black shadow-inner"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all" data-mode="high-contrast-pink">
                                <span class="font-black text-black uppercase text-sm">Pink on Black</span>
                                <div class="w-8 h-8 rounded-full bg-black border-2 border-[#FF99CC] shadow-inner"></div>
                            </button>
                        </div>
                    </section>
                    <section aria-labelledby="text-size-heading">
                        <div class="flex items-center gap-2 mb-6 border-b-2 border-slate-100 pb-3">
                            <h3 id="text-size-heading" class="text-lg font-black uppercase tracking-wider text-black">Text Size</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <button type="button" class="text-size-option p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all font-black uppercase text-sm" data-size="ts-small">Small</button>
                            <button type="button" class="text-size-option p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all font-black uppercase text-sm" data-size="ts-medium">Medium</button>
                            <button type="button" class="text-size-option p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all font-black uppercase text-sm" data-size="ts-large">Large</button>
                            <button type="button" class="text-size-option p-5 rounded-xl border-2 border-slate-200 hover:border-accent transition-all font-black uppercase text-sm" data-size="ts-xlarge">Extra Large</button>
                        </div>
                    </section>
                </div>
                <div class="p-8 bg-slate-50 border-t-2 border-slate-200 flex flex-col sm:flex-row gap-4 flex-shrink-0">
                    <button type="button" id="cancel-accessibility" class="flex-1 px-8 py-4 rounded-full border-2 border-slate-400 text-black font-black uppercase text-sm hover:bg-slate-200 transition-all">Cancel</button>
                    <button type="button" id="save-accessibility" class="flex-1 px-8 py-4 rounded-full bg-accent text-white font-black uppercase text-sm hover:bg-accent-700 transition-all shadow-lg border-2 border-accent">Save Changes</button>
                </div>
            </div>
        `;
        document.body.appendChild(contrastModal);
    }

    if (!document.getElementById('confirmation-modal')) {
        const confirmModal = document.createElement('dialog');
        confirmModal.id = 'confirmation-modal';
        confirmModal.className = 'p-0 rounded-3xl shadow-2xl border-none max-w-lg w-full overflow-hidden';
        confirmModal.innerHTML = `
            <div class="bg-primary p-10 text-white relative">
                <button id="close-confirmation-modal" class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Close Modal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
                <h2 id="confirmation-modal-title" class="text-4xl font-black uppercase mb-3">Notice</h2>
                <p id="confirmation-modal-message" class="text-white/90 text-lg leading-relaxed">Message goes here.</p>
            </div>
            <div class="p-10 bg-white flex justify-end gap-5">
                <button id="cancel-confirmation-modal" class="btn-outline px-8 py-3 text-sm font-black uppercase">Go Back</button>
                <button id="confirm-confirmation-modal" class="btn-primary px-8 py-3 text-sm font-black uppercase">Proceed</button>
            </div>
        `;
        document.body.appendChild(confirmModal);
    }
}

/**
 * Unified menu toggle functionality (Mobile & Desktop Drawer)
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            const nowExpanded = !isExpanded;
            menuBtn.setAttribute('aria-expanded', nowExpanded);

            if (nowExpanded) {
                mobileNav.classList.remove('opacity-0', 'invisible', 'translate-x-full');
                mobileNav.classList.add('opacity-100', 'visible', 'translate-x-0');
                document.body.classList.add('overflow-hidden'); // Prevent scroll when menu is open
            } else {
                mobileNav.classList.add('opacity-0', 'invisible', 'translate-x-full');
                mobileNav.classList.remove('opacity-100', 'visible', 'translate-x-0');
                document.body.classList.remove('overflow-hidden');
            }

            // Add visibility for screen readers and sighted users
            const label = menuBtn.querySelector('.menu-label');
            const iconSvg = menuBtn.querySelector('svg');

            if (label) {
                label.textContent = nowExpanded ? 'Close' : 'Menu';
            }

            if (iconSvg) {
                if (nowExpanded) {
                    // X icon
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
                    // Move focus to first link in nav
                    setTimeout(() => {
                        const firstLink = mobileNav.querySelector('a');
                        if (firstLink) firstLink.focus();
                    }, 300);
                } else {
                    // Menu icon
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                    // Focus back to menu button
                    menuBtn.focus();
                }
            }
        });

        // Close menu on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
                mobileNav.classList.add('opacity-0', 'invisible', 'translate-x-full');
                mobileNav.classList.remove('opacity-100', 'visible', 'translate-x-0');
                menuBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('overflow-hidden');
                const label = menuBtn.querySelector('.menu-label');
                if (label) label.textContent = 'Menu';
                const iconSvg = menuBtn.querySelector('svg');
                if (iconSvg) {
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                }
                menuBtn.focus();
            }
        });

        // Close menu when clicking outside (on the backdrop overlay)
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                menuBtn.click();
            }
        });
    }

    // Dropdown Accordions (Works for both mobile and desktop drawer)
    const mobileToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('aria-controls');
            const target = document.getElementById(targetId);
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const nowExpanded = !isExpanded;

            // Toggle current
            toggle.setAttribute('aria-expanded', nowExpanded);

            if (target) {
                if (nowExpanded) {
                    target.classList.remove('hidden');
                    // Trigger reflow for transition
                    void target.offsetHeight;
                    target.classList.remove('max-h-0', 'opacity-0', 'invisible');
                    target.classList.add('max-h-[500px]', 'opacity-100', 'visible');
                } else {
                    target.classList.add('max-h-0', 'opacity-0', 'invisible');
                    target.classList.remove('max-h-[500px]', 'opacity-100', 'visible');
                    // Add hidden after transition completes
                    setTimeout(() => {
                        if (toggle.getAttribute('aria-expanded') === 'false') {
                            target.classList.add('hidden');
                        }
                    }, 300);
                }
            }

            // Rotate icon for animation effect
            const icon = toggle.querySelector('svg');
            if (icon) {
                icon.style.transform = nowExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });
}

/**
 * Desktop navigation accessibility - handle focus states and clicks
 */
function initDesktopNav() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const content = dropdown.querySelector('.dropdown-content');

        if (button && content) {
            // Toggle on click
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                // Close all other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        const otherBtn = other.querySelector('button');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });

                button.setAttribute('aria-expanded', !isExpanded);
            });

            // Handle keyboard navigation within dropdown
            dropdown.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    button.setAttribute('aria-expanded', 'false');
                    button.focus();
                }

                // Allow Space to toggle as well
                if (e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    button.click();
                }
            });

            // Close when focus leaves the dropdown (Tab out)
            dropdown.addEventListener('focusout', (e) => {
                // Use requestAnimationFrame to check focus after it shifts
                requestAnimationFrame(() => {
                    if (!dropdown.contains(document.activeElement)) {
                        button.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const button = dropdown.querySelector('button');
                if (button) button.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

/**
 * Modern Search Functionality
 */
function initSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const searchCancel = document.getElementById('search-cancel');
    const searchContainer = document.getElementById('search-container');

    if (!searchBtn || !searchInput) return;

    const showSearch = () => {
        if (searchCancel) searchCancel.classList.remove('hidden');
        searchInput.focus();
    };

    const hideSearch = () => {
        if (searchCancel) searchCancel.classList.add('hidden');
        const results = document.getElementById('search-results');
        if (results) results.remove();
    };

    searchBtn.addEventListener('click', (e) => {
        const isCollapsed = searchInput.offsetWidth <= 0;

        if (isCollapsed) {
            showSearch();
        } else if (searchInput.value.trim() === '') {
            searchInput.focus();
        } else {
            performSearch(searchInput.value);
        }
    });

    if (searchCancel) {
        searchCancel.addEventListener('click', () => {
            searchInput.value = '';
            hideSearch();
            searchBtn.focus();
        });
    }

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // Close search on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchInput.classList.contains('hidden')) {
            hideSearch();
        }
    });
}

function performSearch(query) {
    if (!query || query.trim().length < 2) return;

    const results = SITE_INDEX.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );

    showSearchResults(results);
}

/**
 * Footer search input submission
 */
function initFooterSearchSubmit() {
    const footerSearchInput = document.getElementById('footer-search-input');
    const footerSearchSubmit = document.getElementById('footer-search-submit');

    if (footerSearchInput && footerSearchSubmit) {
        const handleFooterSearch = () => {
            const query = footerSearchInput.value.trim();
            if (query.length >= 2) {
                // We use the existing performSearch logic
                window.scrollTo({ top: 0, behavior: 'smooth' });
                const mainSearchInput = document.getElementById('search-input');
                const mainSearchCancel = document.getElementById('search-cancel');
                if (mainSearchInput) {
                    mainSearchInput.classList.remove('hidden');
                    if (mainSearchCancel) mainSearchCancel.classList.remove('hidden');
                    mainSearchInput.value = query;
                    performSearch(query);
                    mainSearchInput.focus();
                }
            }
        };

        footerSearchSubmit.addEventListener('click', handleFooterSearch);
        footerSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleFooterSearch();
            }
        });
    }
}

function showSearchResults(results) {
    let resultsDiv = document.getElementById('search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results';
        resultsDiv.className = 'absolute top-full right-0 w-80 sm:w-96 bg-white shadow-2xl rounded-b-2xl border border-slate-200 z-[100] max-h-96 overflow-y-auto p-2';
        resultsDiv.setAttribute('aria-live', 'polite');
        document.getElementById('search-container').appendChild(resultsDiv);
    }

    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="p-4 text-sm text-black font-black text-center">No matches found for your search.</div>';
    } else {
        results.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.className = 'block p-4 hover:bg-slate-50 rounded-xl transition-all border-b border-slate-100 last:border-0 group';
            link.innerHTML = `
                <h4 class="font-black text-black group-hover:text-accent text-sm mb-1 uppercase tracking-tight">${item.title}</h4>
                <p class="text-xs text-black line-clamp-2 leading-relaxed">${item.content}</p>
            `;
            resultsDiv.appendChild(link);
        });
    }

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!document.getElementById('search-container').contains(e.target)) {
            const resultsDiv = document.getElementById('search-results');
            if (resultsDiv) resultsDiv.remove();
        }
    }, { once: true });
}

/**
 * Global Confirmation Modal Logic
 */
let confirmCallback = null;

function initConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    const closeBtn = document.getElementById('close-confirmation-modal');
    const cancelBtn = document.getElementById('cancel-confirmation-modal');
    const confirmBtn = document.getElementById('confirm-confirmation-modal');

    if (!modal) return;

    const closeModal = () => {
        modal.close();
        confirmCallback = null;
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            if (confirmCallback) {
                confirmCallback();
            }
            closeModal();
        });
    }

    // Close on click outside
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            closeModal();
        }
    });
}

function showConfirmation(title, message, onConfirm, showCancel = true) {
    const modal = document.getElementById('confirmation-modal');
    const titleElem = document.getElementById('confirmation-modal-title');
    const messageElem = document.getElementById('confirmation-modal-message');
    const cancelBtn = document.getElementById('cancel-confirmation-modal');
    const confirmBtn = document.getElementById('confirm-confirmation-modal');

    if (!modal || !titleElem || !messageElem) {
        // Fallback if modal not present in HTML
        if (confirm(message)) {
            onConfirm();
        }
        return;
    }

    titleElem.textContent = title;
    messageElem.textContent = message;
    confirmCallback = onConfirm;

    if (cancelBtn) {
        if (showCancel) {
            cancelBtn.classList.remove('hidden');
        } else {
            cancelBtn.classList.add('hidden');
        }
    }

    if (confirmBtn) {
        confirmBtn.textContent = showCancel ? 'Continue' : 'OK';
    }

    modal.showModal();
}

/**
 * Shows a simple alert with a single OK button
 */
function showAlert(title, message) {
    showConfirmation(title, message, () => {
        // Nothing special on alert dismissal
    }, false);
}

/**
 * Simple Popup function as requested by user - Updated to use Alert Modal
 */
function showPopup() {
    showAlert("Notification", "Hello! This is a popup.");
}

/**
 * Automatically handle external links for accessibility and security
 * Updated to use accessible modal
 */
function initExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach(link => {
        // Ensure rel="noopener noreferrer" for security
        link.setAttribute('rel', 'noopener noreferrer');

        // Add "(opens in new tab)" for screen readers
        const hasSRLabel = link.querySelector('.sr-only');
        if (!hasSRLabel) {
            const srText = document.createElement('span');
            srText.className = 'sr-only';
            srText.textContent = ' (opens in new tab)';
            link.appendChild(srText);
        }

        // Accessible modal pop-up logic - only for actually external links
        link.addEventListener('click', (e) => {
            const href = link.href;
            const isExternal = link.hostname && link.hostname !== window.location.hostname;

            if (isExternal) {
                e.preventDefault();
                showConfirmation(
                    "Leaving Website",
                    "You are now leaving the San Diego Goalball website to visit an external link. Do you wish to continue?",
                    () => {
                        window.open(href, '_blank', 'noopener,noreferrer');
                    }
                );
            }
        });
    });
}

/**
 * FAQ Accordion Logic - Enhanced for Accessibility (ARIA + State Text)
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        const status = item.querySelector('.faq-status');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = question.getAttribute('aria-expanded') === 'true';
                const nowOpen = !isOpen;

                // Close all other items for a clean accordion experience
                faqItems.forEach(otherItem => {
                    const otherBtn = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    const otherStatus = otherItem.querySelector('.faq-status');

                    if (otherBtn && otherBtn !== question) {
                        otherBtn.setAttribute('aria-expanded', 'false');
                        if (otherAnswer) otherAnswer.style.maxHeight = '0px';
                        if (otherIcon) otherIcon.classList.remove('rotate-180');
                        if (otherStatus) otherStatus.textContent = 'Collapsed';
                    }
                });

                // Toggle current item
                question.setAttribute('aria-expanded', nowOpen);

                if (nowOpen) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    if (icon) icon.classList.add('rotate-180');
                    if (status) status.textContent = 'Expanded';
                } else {
                    answer.style.maxHeight = '0px';
                    if (icon) icon.classList.remove('rotate-180');
                    if (status) status.textContent = 'Collapsed';
                }
            });
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
 * Accessibility Options Functionality - Enhanced for Multiple Modes and Text Size
 */
function initContrastToggle() {
    const toggleBtn = document.getElementById('contrast-toggle');
    const modal = document.getElementById('contrast-modal');
    const closeBtn = document.getElementById('close-contrast-modal');
    const contrastOptions = document.querySelectorAll('.contrast-option');
    const textSizeOptions = document.querySelectorAll('.text-size-option');
    const saveBtn = document.getElementById('save-accessibility');
    const cancelBtn = document.getElementById('cancel-accessibility');

    if (!toggleBtn || !modal) return;

    // Current active state (from storage or defaults)
    let activeMode = localStorage.getItem('accessibility-mode') || 'standard';
    let activeSize = localStorage.getItem('accessibility-size') || 'ts-medium';

    // Temporary state while modal is open
    let tempMode = activeMode;
    let tempSize = activeSize;

    // Initial application
    setContrastMode(activeMode);
    setTextSize(activeSize);

    toggleBtn.addEventListener('click', () => {
        // Reset temp state to current active state when opening
        tempMode = activeMode;
        tempSize = activeSize;
        updateModalUI();
        modal.showModal();
    });

    const closeModal = () => {
        modal.close();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    contrastOptions.forEach(option => {
        option.addEventListener('click', () => {
            tempMode = option.getAttribute('data-mode');
            updateModalUI();
        });
    });

    textSizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            tempSize = option.getAttribute('data-size');
            updateModalUI();
        });
    });

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            activeMode = tempMode;
            activeSize = tempSize;
            setContrastMode(activeMode);
            setTextSize(activeSize);
            closeModal();
        });
    }

    function updateModalUI() {
        // Update contrast options UI
        contrastOptions.forEach(opt => {
            if (opt.getAttribute('data-mode') === tempMode) {
                opt.classList.add('border-accent', 'bg-slate-100', 'ring-4', 'ring-accent');
                opt.classList.remove('border-slate-200');
            } else {
                opt.classList.remove('border-accent', 'bg-slate-100', 'ring-4', 'ring-accent');
                opt.classList.add('border-slate-200');
            }
        });

        // Update text size options UI
        textSizeOptions.forEach(opt => {
            if (opt.getAttribute('data-size') === tempSize) {
                opt.classList.add('border-accent', 'bg-slate-100', 'ring-4', 'ring-accent');
                opt.classList.remove('border-slate-200');
            } else {
                opt.classList.remove('border-accent', 'bg-slate-100', 'ring-4', 'ring-accent');
                opt.classList.add('border-slate-200');
            }
        });
    }

    // Close on click outside
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            closeModal();
        }
    });
}

/**
 * Sets the contrast/accessibility mode
 * @param {string} mode - 'standard', 'high-contrast-white', 'high-contrast-yellow', 'high-contrast-black', 'high-contrast-pink', 'grayscale'
 */
function setContrastMode(mode) {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('contrast-toggle');

    // Remove all accessibility classes prefixed with cm-
    html.className = html.className.replace(/\bcm-\S+/g, '').trim();

    if (mode && mode !== 'standard') {
        html.classList.add(`cm-${mode}`);
        localStorage.setItem('accessibility-mode', mode);
        if (toggleBtn) toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
        localStorage.removeItem('accessibility-mode');
        if (toggleBtn) toggleBtn.setAttribute('aria-pressed', 'false');
    }
}

/**
 * Sets the text size mode
 * @param {string} size - 'ts-small', 'ts-medium', 'ts-large', 'ts-xlarge'
 */
function setTextSize(size) {
    const html = document.documentElement;
    html.classList.remove('ts-small', 'ts-medium', 'ts-large', 'ts-xlarge');

    if (size !== 'ts-medium') {
        html.classList.add(size);
        localStorage.setItem('accessibility-size', size);
    } else {
        localStorage.removeItem('accessibility-size');
    }
}

/**
 * Cookie Consent Banner logic
 */
function initCookieConsent() {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie-consent');
    if (consent) return;

    // Create the banner
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'fixed bottom-0 left-0 w-full bg-[#002D56] text-white p-8 z-[9999] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t-4 border-[#007A87] transform transition-transform duration-500 translate-y-full';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie Consent');

    banner.innerHTML = `
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex-grow">
                <h2 class="text-2xl font-black mb-3 uppercase tracking-tight text-white">We value your privacy</h2>
                <p class="text-white text-base leading-relaxed max-w-4xl font-medium">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="privacy-policy.html" class="underline hover:text-[#007A87] font-bold">Read our Privacy Policy</a>.
                </p>
            </div>
            <div class="flex flex-wrap gap-4">
                <button id="cookie-accept-btn" class="bg-[#007A87] hover:bg-[#005F67] text-white font-extrabold py-4 px-10 rounded-full transition-all text-sm uppercase tracking-widest shadow-xl border-2 border-[#007A87]">
                    Accept All
                </button>
                <button id="cookie-decline-btn" class="bg-white hover:bg-gray-100 text-[#002D56] font-extrabold py-4 px-10 rounded-full transition-all text-sm uppercase tracking-widest shadow-xl border-2 border-white">
                    Decline
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    // Trigger animation
    setTimeout(() => {
        banner.classList.remove('translate-y-full');
    }, 500);

    const acceptBtn = document.getElementById('cookie-accept-btn');
    const declineBtn = document.getElementById('cookie-decline-btn');

    const closeBanner = () => {
        banner.classList.add('translate-y-full');
        setTimeout(() => banner.remove(), 500);
    };

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        // Actually set a cookie as requested
        document.cookie = "cookie-consent=accepted; max-age=" + (365 * 24 * 60 * 60) + "; path=/; SameSite=Lax";
        closeBanner();
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined');
        closeBanner();
    });
}

/**
 * Highlights the current page in the navigation (both desktop and mobile)
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-inline, #mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('nav-link-active');
            link.setAttribute('aria-current', 'page');

            // If it's a sub-menu item, also highlight the parent dropdown button
            const dropdown = link.closest('.dropdown') || link.closest('li.dropdown');
            if (dropdown) {
                const button = dropdown.querySelector('button');
                if (button) {
                    button.classList.add('nav-link-active');
                }
            }
        }
    });
}
