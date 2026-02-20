// Tailwind CSS Configuration
// This must run before the Tailwind CDN script processes the page
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    // SDSU Theme Palette
                    red: {
                        900: '#A6192E', // SDSU Red
                        800: '#D41736', // Bright Red
                        500: '#A6192E',
                    },
                    charcoal: {
                        DEFAULT: '#2D2828',
                    },
                    black: '#000000',
                    white: '#FFFFFF',
                    // Mapping old colors to new theme for compatibility
                    indigo: {
                        900: '#A6192E',
                        800: '#D41736',
                        500: '#A6192E',
                    },
                    amber: {
                        500: '#2D2828',
                        600: '#000000',
                        700: '#000000',
                    },
                    emerald: {
                        500: '#A6192E',
                        600: '#A6192E',
                        700: '#A6192E',
                    },
                    dark: '#2D2828',
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
    { title: "Gallery", url: "gallery.html", content: "View photos and descriptions of San Diego Goalball practices, tournaments, and community events." },
    { title: "What is Goalball?", url: "about-goalball.html", content: "Discover the rules, history, and unique mechanics of goalball, the premier Paralympic team sport." },
    { title: "Rules", url: "rules.html", content: "Detailed rules of goalball including court dimensions, audible ball mechanics, and common penalties." },
    { title: "Equipment", url: "equipment.html", content: "Learn about specialized goalball gear including audible balls, blackout eyeshades, and protective padding." },
    { title: "Practice Schedule", url: "schedule.html", content: "View our simplified practice schedule at Mission Valley YMCA and Stagecoach Park in Carlsbad." },
    { title: "Tournaments", url: "tournaments.html", content: "Information on major goalball tournaments like the Cascade Classic and USABA Nationals." },
    { title: "Get Involved Overview", url: "get-involved.html", content: "Volunteer with us or support our athletes through donations and community outreach." },
    { title: "Volunteer", url: "volunteer.html", content: "Join our team as a goal judge, timer, scorer, or sighted guide. Training provided." },
    { title: "Sponsorship", url: "sponsorship.html", content: "Partner with San Diego Goalball through corporate sponsorship tiers and support our athletes." },
    { title: "Resources", url: "resources.html", content: "Explore Goalball resources, governing bodies like USABA and IBSA, and local San Diego organizations." },
    { title: "Contact", url: "contact.html", content: "Get in touch with Lori or Neal Meyers for inquiries about practices and volunteering." }
];

// Site-wide Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize desktop navigation accessibility
    initDesktopNav();

    // Initialize search
    initSearch();

    // Initialize external links accessibility
    initExternalLinks();

    // Initialize FAQ Accordion
    initFAQ();

    // Set current year in footer
    initYear();

    // Initialize navigation highlighting
    highlightCurrentPage();

    // Initialize Tournament Countdown
    initCountdownTimer();

    // Initialize Download Modal
    initDownloadModal();

    // Initialize Global Confirmation Modal
    initConfirmationModal();
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
    const searchContainer = document.getElementById('search-container');

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener('click', (e) => {
        if (searchInput.classList.contains('hidden')) {
            searchInput.classList.remove('hidden');
            searchInput.focus();
        } else {
            performSearch(searchInput.value);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // Close search on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchInput.classList.contains('hidden')) {
            searchInput.classList.add('hidden');
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
            resultsDiv.remove();
        }
    }, { once: true });
}

/**
 * Tournament Countdown Timer
 * Target: Feb 20, 2026, 2:40 PM PT
 */
function initCountdownTimer() {
    const timerElement = document.getElementById('tournament-countdown');
    if (!timerElement) return;

    // Set the target date: Feb 20, 2026, 2:40 PM PT
    // PT is UTC-8 (Standard) or UTC-7 (Daylight). In Feb it is PST (UTC-8).
    const targetDate = new Date('2026-02-20T14:40:00-08:00').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            timerElement.innerHTML = "The Tournament has started! Watch the live stream below.";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysStr = days > 0 ? `${days}d ` : "";
        const hoursStr = `${hours}h `;
        const minutesStr = `${minutes}m `;
        const secondsStr = `${seconds}s`;

        const timeString = `${daysStr}${hoursStr}${minutesStr}${secondsStr}`;

        // Update the visual display
        const displayElement = timerElement.querySelector('.countdown-display');
        if (displayElement) {
            displayElement.textContent = timeString;
        } else {
            timerElement.textContent = `Tournament starts in: ${timeString}`;
        }

        // Accessibility: Update an aria-live region every minute
        const liveRegion = document.getElementById('countdown-live-region');
        if (liveRegion && minutes % 5 === 0 && seconds === 0) {
            liveRegion.textContent = `Tournament starts in ${days > 0 ? days + ' days, ' : ''}${hours} hours and ${minutes} minutes.`;
        }
    };

    updateTimer();
    setInterval(updateTimer, 1000);
}

/**
 * Download Modal Logic
 */
function initDownloadModal() {
    const modal = document.getElementById('download-modal');
    const openBtns = document.querySelectorAll('.open-download-modal');
    const closeBtn = document.getElementById('close-download-modal');

    if (!modal || !closeBtn) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.showModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // Close on click outside
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
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
 * Highlights the current page in the navigation (both desktop and mobile)
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            // Updated for SDSU Red theme - using white or light red for active state in the red header
            link.classList.add('text-white');
            link.classList.remove('text-white/70');
            link.classList.add('opacity-100');
            link.classList.add('font-black');
            link.setAttribute('aria-current', 'page');

            // If it's a sub-menu item, also highlight the parent dropdown button
            const dropdown = link.closest('.dropdown') || link.closest('li.dropdown');
            if (dropdown) {
                const button = dropdown.querySelector('button');
                if (button) {
                    button.classList.add('text-white');
                    button.classList.remove('text-white/70');
                    button.classList.add('font-black');
                }
            }
        } else {
            // Only add text-white/70 if it doesn't already have text-white
            if (!link.classList.contains('text-white')) {
                link.classList.add('text-white/70');
            }
        }
    });
}
