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
    { title: "About Us", url: "about.html", content: "Learn about our mission to empower athletes through sport, inclusion, and competitive excellence. Information on Matt Boyle." },
    { title: "About Goalball", url: "about-goalball.html", content: "Discover the rules, history, and unique mechanics of goalball, the premier Paralympic team sport." },
    { title: "Equipment", url: "equipment.html", content: "Learn about specialized goalball gear including audible balls, blackout eyeshades, and protective padding." },
    { title: "Schedule", url: "schedule.html", content: "View our simplified practice schedule at Mission Valley YMCA and Stagecoach Park in Carlsbad." },
    { title: "Get Involved", url: "get-involved.html", content: "Volunteer with us or support our athletes through donations and community outreach." },
    { title: "Resources", url: "resources.html", content: "Explore Goalball resources, governing bodies like USABA and IBSA, and local San Diego organizations." },
    { title: "Contact", url: "contact.html", content: "Get in touch with Lori or Neal Meyers for inquiries about practices and volunteering." }
];

// Site-wide Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

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
});

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('button[aria-label="Toggle Menu"]');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileNav.classList.contains('hidden');
            mobileNav.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', isHidden);

            // Add visibility for screen readers and sighted users
            const label = menuBtn.querySelector('.menu-label');
            const iconSvg = menuBtn.querySelector('svg');

            if (label) {
                label.textContent = isHidden ? 'Close' : 'Menu';
            }

            if (iconSvg) {
                if (isHidden) {
                    // X icon
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
                } else {
                    // Menu icon
                    iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                }
            }
        });
    }
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
                <h4 class="font-bold text-indigo-900 text-sm mb-1">${item.title}</h4>
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
 * Automatically handle external links for accessibility and security
 */
function initExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');

    // Create Modal Element if it doesn't exist
    let modal = document.getElementById('external-link-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'external-link-modal';
        modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300';
        modal.innerHTML = `
            <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform scale-95 transition-transform duration-300" id="modal-content">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-red-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
                <h3 class="text-2xl font-black text-red-900 text-center uppercase mb-4 tracking-tight">Leaving Our Site</h3>
                <p class="text-gray-600 text-center mb-8 leading-relaxed">
                    You are about to leave <span class="font-bold">San Diego Goalball</span> to visit an external website. Would you like to proceed?
                </p>
                <div class="flex flex-col gap-3">
                    <a id="modal-proceed" href="#" target="_blank" class="btn-primary text-center">Yes, Proceed</a>
                    <button id="modal-cancel" class="py-3 px-8 rounded-full font-bold text-gray-500 hover:text-red-900 transition-colors">Go Back</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const cancelBtn = modal.querySelector('#modal-cancel');
        cancelBtn.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }

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

        // Intercept click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            openModal(modal, href);
        });
    });
}

function openModal(modal, href) {
    const proceedBtn = modal.querySelector('#modal-proceed');
    const content = modal.querySelector('#modal-content');
    proceedBtn.href = href;

    modal.classList.remove('hidden');
    // Force reflow
    modal.offsetHeight;
    modal.classList.add('opacity-100');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');

    // Handle proceed button click to close modal
    proceedBtn.onclick = () => {
        setTimeout(() => closeModal(modal), 500);
    };
}

function closeModal(modal) {
    const content = modal.querySelector('#modal-content');
    modal.classList.remove('opacity-100');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
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
            link.classList.add('opacity-100');
            link.classList.add('font-black');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.add('text-white/70');
        }
    });
}
