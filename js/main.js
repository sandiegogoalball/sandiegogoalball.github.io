// Tailwind CSS Configuration
// This must run before the Tailwind CDN script processes the page
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    // New Theme Palette
                    indigo: {
                        900: '#1e1b4b',
                        800: '#312e81',
                        500: '#6366f1',
                    },
                    amber: {
                        500: '#f59e0b',
                        600: '#d97706',
                        700: '#b45309',
                    },
                    emerald: {
                        500: '#10b981',
                        600: '#059669',
                        700: '#047857',
                    },
                    // Legacy Mapping (for compatibility during transition)
                    navy: {
                        DEFAULT: '#1e1b4b',
                        900: '#1e1b4b',
                        800: '#312e81',
                    },
                    gold: {
                        DEFAULT: '#f59e0b',
                        500: '#f59e0b',
                        600: '#d97706',
                        700: '#b45309',
                    },
                    sky: {
                        DEFAULT: '#10b981',
                        100: '#ecfdf5',
                        200: '#a7f3d0',
                        500: '#10b981',
                        600: '#059669',
                    },
                    dark: '#111111',
                    black: '#000000'
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
    { title: "Programs", url: "programs.html", content: "Discover the rules, equipment, and unique mechanics of goalball, the premier Paralympic team sport." },
    { title: "Schedule", url: "schedule.html", content: "View our simplified practice schedule at Mission Valley YMCA and Stagecoach Park in Carlsbad." },
    { title: "Get Involved", url: "get-involved.html", content: "Volunteer with us or support our athletes through donations and community outreach." },
    { title: "Blog", url: "blog.html", content: "Stay updated with the latest news, tournament results, and community stories from San Diego County Goalball." },
    { title: "SD Goalball Shines at Cascade Classic", url: "blog/2026-cascade-classic.html", content: "Recap of our tournament journey in Portland, Oregon at the 16th Annual Cascade Classic." },
    { title: "Contact", url: "contact.html", content: "Get in touch with Lori or Mike Meyers for inquiries about practices and volunteering." }
];

// Site-wide Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize search
    initSearch();

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
 * Highlights the current page in the navigation (both desktop and mobile)
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    // Select links in desktop nav and mobile nav
    const navLinks = document.querySelectorAll('nav a, #mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-amber-700'); // Accessible gold for text
            link.classList.add('font-bold');
            link.classList.remove('text-indigo-900');
            link.setAttribute('aria-current', 'page');
        }
    });
}
