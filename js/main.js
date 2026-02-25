// Tailwind CSS Configuration
// This must run before the Tailwind CDN script processes the page
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    // Professional Brand Palette
                    primary: {
                        DEFAULT: '#7c2d12', // Dark Orange for AAA Contrast
                        50: '#fff7ed',
                        100: '#ffedd5',
                        200: '#fed7aa',
                        300: '#fdba74',
                        400: '#fb923c',
                        500: '#f97316',
                        600: '#ea580c',
                        700: '#c2410c',
                        800: '#9a3412',
                        900: '#7c2d12',
                        950: '#431407',
                    },
                    secondary: {
                        DEFAULT: '#1e3a8a', // Deep Blue for Toolbar
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                        950: '#172554',
                    },
                    accent: {
                        DEFAULT: '#eab308', // Yellow for highlights/banner
                        500: '#eab308',
                        600: '#ca8a04',
                        700: '#a16207',
                    },
                    black: '#000000',
                    white: '#FFFFFF',
                    dark: '#111827',
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
 * Mobile menu toggle functionality and accordions
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('button[aria-label="Toggle Menu"]');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            const nowExpanded = !isExpanded;
            menuBtn.setAttribute('aria-expanded', nowExpanded);

            if (nowExpanded) {
                mobileNav.classList.remove('max-h-0', 'opacity-0', 'invisible');
                mobileNav.classList.add('max-h-[90vh]', 'opacity-100', 'visible');
            } else {
                mobileNav.classList.add('max-h-0', 'opacity-0', 'invisible');
                mobileNav.classList.remove('max-h-[90vh]', 'opacity-100', 'visible');
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
                    // Move focus to first link in mobile nav
                    setTimeout(() => {
                        const firstLink = mobileNav.querySelector('a');
                        if (firstLink) firstLink.focus();
                    }, 100);
                } else {
                    // Menu icon
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                    // Focus back to menu button
                    menuBtn.focus();
                }
            }
        });

        // Close mobile menu on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
                mobileNav.classList.add('max-h-0', 'opacity-0', 'invisible');
                mobileNav.classList.remove('max-h-[90vh]', 'opacity-100', 'visible');
                menuBtn.setAttribute('aria-expanded', 'false');
                const label = menuBtn.querySelector('.menu-label');
                if (label) label.textContent = 'Menu';
                const iconSvg = menuBtn.querySelector('svg');
                if (iconSvg) {
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                }
                menuBtn.focus();
            }
        });
    }

    // Mobile Dropdown Accordions
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
        const isMobileHidden = window.getComputedStyle(searchInput).display === 'none';

        if (isMobileHidden || searchInput.classList.contains('hidden')) {
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
                // But we need to make sure the results appear in a good place.
                // For simplicity, we'll scroll to top and use the main search container for results.
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
        resultsDiv.className = 'absolute top-full right-0 w-80 bg-white shadow-xl rounded-b-xl border border-gray-100 z-[100] max-h-96 overflow-y-auto p-4';
        document.getElementById('search-container').appendChild(resultsDiv);
    }

    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="text-sm text-gray-500">No results found.</p>';
    } else {
        results.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.className = 'block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0';
            link.innerHTML = `
                <h4 class="font-bold text-red-900 text-sm mb-1">${item.title}</h4>
                <p class="text-xs text-gray-600 line-clamp-2">${item.content}</p>
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

function showConfirmation(title, message, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    const titleElem = document.getElementById('confirmation-modal-title');
    const messageElem = document.getElementById('confirmation-modal-message');

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
    modal.showModal();
}

/**
 * Simple Popup function as requested by user - Updated to use Modal
 */
function showPopup() {
    showConfirmation("Notification", "Hello! This is a popup.", () => {
        console.log("Popup dismissed");
    });
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

        // Accessible modal pop-up logic
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.href;
            showConfirmation(
                "Leaving Website",
                "You are now leaving the San Diego Goalball website to visit an external link. Do you wish to continue?",
                () => {
                    window.open(href, '_blank', 'noopener,noreferrer');
                }
            );
        });
    });
}

/**
 * FAQ Accordion Logic
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

                // Close all other items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherAnswer && otherAnswer !== answer) {
                        otherAnswer.style.maxHeight = '0px';
                        otherIcon?.classList.remove('rotate-180');
                    }
                });

                // Toggle current item
                if (isOpen) {
                    answer.style.maxHeight = '0px';
                    icon?.classList.remove('rotate-180');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon?.classList.add('rotate-180');
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
                opt.classList.add('border-secondary', 'bg-slate-50');
                opt.classList.remove('border-slate-100');
            } else {
                opt.classList.remove('border-secondary', 'bg-slate-50');
                opt.classList.add('border-slate-100');
            }
        });

        // Update text size options UI
        textSizeOptions.forEach(opt => {
            if (opt.getAttribute('data-size') === tempSize) {
                opt.classList.add('border-secondary', 'bg-slate-50');
                opt.classList.remove('border-slate-100');
            } else {
                opt.classList.remove('border-secondary', 'bg-slate-50');
                opt.classList.add('border-slate-100');
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
 * @param {string} mode - 'standard', 'high-contrast', 'high-contrast-yellow', 'high-contrast-black-white', 'high-contrast-pink', 'grayscale'
 */
function setContrastMode(mode) {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('contrast-toggle');

    // Remove all accessibility classes
    html.classList.remove('high-contrast', 'high-contrast-yellow', 'high-contrast-black-white', 'high-contrast-pink', 'grayscale-mode');

    if (mode !== 'standard') {
        if (mode === 'high-contrast') html.classList.add('high-contrast');
        if (mode === 'high-contrast-yellow') html.classList.add('high-contrast-yellow');
        if (mode === 'high-contrast-black-white') html.classList.add('high-contrast-black-white');
        if (mode === 'high-contrast-pink') html.classList.add('high-contrast-pink');
        if (mode === 'grayscale') html.classList.add('grayscale-mode');

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
    banner.className = 'fixed bottom-0 left-0 w-full bg-blue-900 text-white p-6 z-[200] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3)] border-t-4 border-orange-500 transform transition-transform duration-500 translate-y-full';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie Consent');

    banner.innerHTML = `
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex-grow">
                <h2 class="text-xl font-black mb-2 uppercase tracking-tight">We value your privacy</h2>
                <p class="text-white/80 text-sm leading-relaxed max-w-4xl">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. For more information, please read our <a href="privacy-policy.html" class="underline hover:text-white">Privacy Policy</a>.
                </p>
            </div>
            <div class="flex flex-shrink-0 gap-4">
                <button id="cookie-accept-btn" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all text-sm uppercase tracking-widest whitespace-nowrap shadow-lg hover:-translate-y-0.5">
                    Accept All
                </button>
                <button id="cookie-decline-btn" class="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-all text-sm uppercase tracking-widest whitespace-nowrap hover:bg-white/10">
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
    const navLinks = document.querySelectorAll('nav a, #mobile-nav a');

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
