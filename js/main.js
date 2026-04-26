// Tailwind CSS Configuration
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    primary: '#002D56',
                    secondary: '#007A87',
                    accent: {
                        DEFAULT: '#007A87',
                        500: '#00A3AD',
                        600: '#007A87',
                        700: '#005F67',
                    },
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                },
                animation: {
                    'fade-in': 'fadeIn 0.5s ease-out forwards',
                    'slide-in': 'slideIn 0.5s ease-out forwards',
                },
                keyframes: {
                    fadeIn: {
                        '0%': { opacity: '0' },
                        '100%': { opacity: '1' },
                    },
                    slideIn: {
                        '0%': { transform: 'translateY(20px)', opacity: '0' },
                        '100%': { transform: 'translateY(0)', opacity: '1' },
                    }
                }
            }
        }
    }
};

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

document.addEventListener('DOMContentLoaded', () => {
    injectModals();
    initMobileMenu();
    initDesktopNav();
    initSearch();
    initFooterSearchSubmit();
    initExternalLinks();
    initFAQ();
    initYear();
    highlightCurrentPage();
    initConfirmationModal();
    initContrastToggle();
    initCookieConsent();
    initScrollHeader();
    initScrollReveal();
});

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initScrollHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl', 'py-0');
            header.querySelector('.header-top').classList.remove('h-20', 'md:h-24');
            header.querySelector('.header-top').classList.add('h-16', 'md:h-20');
        } else {
            header.classList.remove('shadow-xl');
            header.querySelector('.header-top').classList.add('h-20', 'md:h-24');
            header.querySelector('.header-top').classList.remove('h-16', 'md:h-20');
        }
    });
}

function injectModals() {
    if (!document.getElementById('mobile-nav')) {
        const mobileNav = document.createElement('div');
        mobileNav.id = 'mobile-nav';
        mobileNav.className = 'fixed inset-0 bg-primary/60 backdrop-blur-md z-[2000] invisible opacity-0 transition-all duration-500 ease-in-out';
        mobileNav.innerHTML = `
            <div class="flex flex-col h-full max-w-sm ml-auto bg-white shadow-2xl overflow-y-auto transform translate-x-full transition-transform duration-500 ease-in-out drawer-inner">
                <div class="flex justify-between items-center p-8 border-b border-slate-100">
                    <span class="text-2xl font-black text-primary uppercase tracking-tighter">Menu</span>
                    <button type="button" class="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-primary" onclick="document.getElementById('menu-toggle-btn').click()" aria-label="Close Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div class="p-8 flex flex-col gap-2 overflow-y-auto h-full">
                    <a href="index.html" class="mobile-nav-link text-xl font-black text-primary py-4 border-b border-slate-50 hover:text-secondary transition-colors">Home</a>

                    <!-- Mobile About -->
                    <div class="mobile-dropdown py-4 border-b border-slate-50">
                        <button type="button" class="w-full flex justify-between items-center text-xl font-black text-primary uppercase tracking-tight mobile-drawer-toggle" aria-expanded="false" data-target="mobile-about-content">
                            About
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 transition-transform duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                        <div id="mobile-about-content" class="hidden flex-col gap-4 pl-6 pt-4">
                            <a href="about.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Our Story</a>
                            <a href="history.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">History</a>
                            <a href="sponsors.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Our Sponsors</a>
                        </div>
                    </div>

                    <!-- Mobile Sport -->
                    <div class="mobile-dropdown py-4 border-b border-slate-50">
                        <button type="button" class="w-full flex justify-between items-center text-xl font-black text-primary uppercase tracking-tight mobile-drawer-toggle" aria-expanded="false" data-target="mobile-sport-content">
                            The Sport
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 transition-transform duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                        <div id="mobile-sport-content" class="hidden flex-col gap-4 pl-6 pt-4">
                            <a href="about-goalball.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Overview</a>
                            <a href="rules.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Rules</a>
                            <a href="equipment.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Equipment</a>
                        </div>
                    </div>

                    <!-- Mobile Events -->
                    <div class="mobile-dropdown py-4 border-b border-slate-50">
                        <button type="button" class="w-full flex justify-between items-center text-xl font-black text-primary uppercase tracking-tight mobile-drawer-toggle" aria-expanded="false" data-target="mobile-events-content">
                            Events
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 transition-transform duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                        <div id="mobile-events-content" class="hidden flex-col gap-4 pl-6 pt-4">
                            <a href="schedule.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Practice Schedule</a>
                            <a href="tournaments.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Tournaments</a>
                            <a href="past-events.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Past Events</a>
                        </div>
                    </div>

                    <!-- Mobile Community -->
                    <div class="mobile-dropdown py-4 border-b border-slate-50">
                        <button type="button" class="w-full flex justify-between items-center text-xl font-black text-primary uppercase tracking-tight mobile-drawer-toggle" aria-expanded="false" data-target="mobile-community-content">
                            Community
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 transition-transform duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                        <div id="mobile-community-content" class="hidden flex-col gap-4 pl-6 pt-4">
                            <a href="get-involved.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Get Involved</a>
                            <a href="volunteer.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">Volunteer</a>
                            <a href="faq.html" class="text-lg font-bold text-slate-600 hover:text-secondary uppercase tracking-wider">FAQ</a>
                        </div>
                    </div>

                    <a href="resources.html" class="text-xl font-black text-primary py-4 border-b border-slate-50 hover:text-secondary transition-colors uppercase tracking-tight">Resources</a>
                    <a href="contact.html" class="text-xl font-black text-primary py-4 hover:text-secondary transition-colors uppercase tracking-tight">Contact</a>
                </div>
                <div class="mt-auto p-8 bg-slate-50">
                    <a href="https://www.gofundme.com/f/support-san-diego-county-goalball-team" target="_blank" class="w-full block text-center py-5 bg-secondary text-white font-black rounded-full shadow-xl hover:bg-secondary-600 transition-all uppercase tracking-widest text-sm">Donate Now</a>
                </div>
            </div>
        `;
        document.body.appendChild(mobileNav);

        // Mobile Drawer Dropdowns
        const mobileToggles = mobileNav.querySelectorAll('.mobile-drawer-toggle');
        mobileToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const targetId = toggle.getAttribute('data-target');
                const target = document.getElementById(targetId);
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

                toggle.setAttribute('aria-expanded', !isExpanded);
                toggle.querySelector('svg').style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                target.classList.toggle('hidden');
                target.classList.toggle('flex');
            });
        });
    }

    if (!document.getElementById('contrast-modal')) {
        const contrastModal = document.createElement('dialog');
        contrastModal.id = 'contrast-modal';
        contrastModal.className = 'p-0 rounded-[2rem] shadow-2xl border-none max-w-lg w-[95%] max-h-[90vh] overflow-hidden';
        contrastModal.innerHTML = `
            <div class="flex flex-col h-full max-h-[90vh]">
                <div class="bg-primary p-10 text-white relative flex-shrink-0">
                    <button id="close-contrast-modal" class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Close Modal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 class="text-4xl font-black uppercase mb-2 tracking-tight">Display Options</h2>
                    <p class="text-white/80 text-sm font-bold uppercase tracking-widest">Customize your experience</p>
                </div>
                <div class="p-10 bg-white overflow-y-auto flex-grow space-y-12 text-black">
                    <section>
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-4 after:content-[''] after:h-px after:bg-slate-100 after:flex-grow">Visual Mode</h3>
                        <div class="grid grid-cols-1 gap-4">
                            <button type="button" class="contrast-option flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all" data-mode="standard">
                                <span class="font-black text-primary uppercase text-sm">Standard (White)</span>
                                <div class="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all" data-mode="high-contrast">
                                <span class="font-black text-primary uppercase text-sm">White on Black</span>
                                <div class="w-10 h-10 rounded-full bg-black border-2 border-white shadow-xl"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all" data-mode="high-contrast-yellow">
                                <span class="font-black text-primary uppercase text-sm">Yellow on Black</span>
                                <div class="w-10 h-10 rounded-full bg-black border-2 border-yellow-400 shadow-xl"></div>
                            </button>
                            <button type="button" class="contrast-option flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all" data-mode="high-contrast-pink">
                                <span class="font-black text-primary uppercase text-sm">Pink on Black</span>
                                <div class="w-10 h-10 rounded-full bg-black border-2 border-pink-400 shadow-xl"></div>
                            </button>
                        </div>
                    </section>
                    <section>
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-4 after:content-[''] after:h-px after:bg-slate-100 after:flex-grow">Text Size</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <button type="button" class="text-size-option p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all font-black uppercase text-xs" data-size="ts-small">Small</button>
                            <button type="button" class="text-size-option p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all font-black uppercase text-xs" data-size="ts-medium">Medium</button>
                            <button type="button" class="text-size-option p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all font-black uppercase text-xs" data-size="ts-large">Large</button>
                            <button type="button" class="text-size-option p-6 rounded-2xl border-2 border-slate-100 hover:border-secondary transition-all font-black uppercase text-xs" data-size="ts-xlarge">Extra Large</button>
                        </div>
                    </section>
                </div>
                <div class="p-8 bg-slate-50 border-t border-slate-100 flex gap-4">
                    <button type="button" id="save-accessibility" class="flex-1 py-5 rounded-full bg-primary text-white font-black uppercase text-sm hover:bg-secondary transition-all shadow-xl hover:scale-[1.02] active:scale-95">Save Changes</button>
                </div>
            </div>
        `;
        document.body.appendChild(contrastModal);
    }

    if (!document.getElementById('confirmation-modal')) {
        const confirmModal = document.createElement('dialog');
        confirmModal.id = 'confirmation-modal';
        confirmModal.className = 'p-0 rounded-[2rem] shadow-2xl border-none max-w-md w-[95%] overflow-hidden';
        confirmModal.innerHTML = `
            <div class="flex flex-col">
                <div class="bg-primary p-10 text-white relative">
                    <button id="close-confirmation-modal" class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Close Modal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                    <h2 id="confirmation-modal-title" class="text-3xl font-black uppercase mb-2 tracking-tight">External Link</h2>
                    <p class="text-white/80 text-sm font-bold uppercase tracking-widest">Leaving our website</p>
                </div>
                <div class="p-10 bg-white">
                    <p id="confirmation-modal-message" class="text-slate-600 font-medium leading-relaxed mb-10 text-black"></p>
                    <div class="flex gap-4">
                        <button type="button" id="confirm-confirmation-modal" class="flex-1 py-5 rounded-full bg-secondary text-white font-black uppercase text-sm hover:bg-secondary-600 transition-all shadow-xl hover:scale-[1.02] active:scale-95">Continue</button>
                        <button type="button" id="cancel-confirmation-modal" class="flex-1 py-5 rounded-full bg-slate-100 text-primary font-black uppercase text-sm hover:bg-slate-200 transition-all">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(confirmModal);
    }
}

function initMobileMenu() {
    const btn = document.getElementById('menu-toggle-btn');
    const nav = document.getElementById('mobile-nav');
    const drawer = nav.querySelector('.drawer-inner');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !isExpanded);

            // Hamburger Animation Logic
            const svg = btn.querySelector('svg');
            if (svg) {
                if (!isExpanded) {
                    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
                } else {
                    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
                }
            }

            if (!isExpanded) {
                nav.classList.remove('invisible', 'opacity-0');
                nav.classList.add('visible', 'opacity-100');
                drawer.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.add('translate-x-full');
                nav.classList.remove('opacity-100');
                nav.classList.add('opacity-0');
                setTimeout(() => {
                    nav.classList.remove('visible');
                    nav.classList.add('invisible');
                }, 500);
                document.body.style.overflow = '';
            }
        });

        nav.addEventListener('click', (e) => {
            if (e.target === nav) btn.click();
        });
    }
}

function initDesktopNav() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const content = dropdown.querySelector('.dropdown-content');

        if (button && content) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                // Close all others
                dropdowns.forEach(d => {
                    d.querySelector('button').setAttribute('aria-expanded', 'false');
                    d.querySelector('.dropdown-content').classList.add('hidden');
                });

                if (!isExpanded) {
                    button.setAttribute('aria-expanded', 'true');
                    content.classList.remove('hidden');
                }
            });

            // Close on escape
            dropdown.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    button.setAttribute('aria-expanded', 'false');
                    content.classList.add('hidden');
                    button.focus();
                }
            });
        }
    });

    document.addEventListener('click', () => {
        dropdowns.forEach(d => {
            d.querySelector('button').setAttribute('aria-expanded', 'false');
            d.querySelector('.dropdown-content').classList.add('hidden');
        });
    });
}

function initSearch() {
    const btn = document.getElementById('search-btn');
    const input = document.getElementById('search-input');
    const cancel = document.getElementById('search-cancel');
    const container = document.getElementById('search-container');

    if (btn && input) {
        btn.addEventListener('click', () => {
            if (input.offsetWidth < 10) {
                input.focus();
            } else if (input.value.trim().length >= 2) {
                performSearch(input.value);
            }
        });

        input.addEventListener('input', () => {
            cancel.classList.toggle('hidden', input.value.length === 0);
            if (input.value.length >= 2) performSearch(input.value);
            else {
                const results = document.getElementById('search-results');
                if (results) results.remove();
            }
        });

        cancel.addEventListener('click', () => {
            input.value = '';
            cancel.classList.add('hidden');
            const results = document.getElementById('search-results');
            if (results) results.remove();
            input.focus();
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(input.value);
        });
    }
}

function performSearch(query) {
    if (!query || query.trim().length < 2) return;
    const matches = SITE_INDEX.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );
    showSearchResults(matches);
}

function showSearchResults(results) {
    let resultsDiv = document.getElementById('search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results';
        resultsDiv.className = 'absolute top-full right-0 w-80 md:w-[400px] bg-white shadow-2xl rounded-2xl border border-slate-100 z-[200] mt-4 p-4 max-h-[70vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300';
        document.getElementById('search-container').appendChild(resultsDiv);
    }

    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="p-4 text-center font-bold text-slate-400">No results found</div>';
    } else {
        resultsDiv.innerHTML = results.map(item => `
            <a href="${item.url}" class="block p-4 hover:bg-slate-50 rounded-xl transition-all border-b border-slate-50 last:border-none group">
                <h4 class="font-black text-primary text-sm uppercase tracking-tight group-hover:text-secondary mb-1">${item.title}</h4>
                <p class="text-xs text-slate-500 line-clamp-2">${item.content}</p>
            </a>
        `).join('');
    }
}

function initFooterSearchSubmit() {
    const input = document.getElementById('footer-search-input');
    const btn = document.getElementById('footer-search-submit');
    if (input && btn) {
        btn.addEventListener('click', () => {
            if (input.value.length >= 2) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                const mainInput = document.getElementById('search-input');
                mainInput.value = input.value;
                performSearch(input.value);
                mainInput.focus();
            }
        });
    }
}

function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.addEventListener('click', (e) => {
            const isExternal = link.hostname && link.hostname !== window.location.hostname;
            if (isExternal) {
                e.preventDefault();
                showConfirmation(
                    "Leaving Website",
                    "You are now leaving our site to visit an external link. Continue?",
                    () => window.open(link.href, '_blank')
                );
            }
        });
    });
}

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-question');
        const a = item.querySelector('.faq-answer');
        if (q && a) {
            q.addEventListener('click', () => {
                const isOpen = q.getAttribute('aria-expanded') === 'true';
                document.querySelectorAll('.faq-question').forEach(otherQ => {
                    otherQ.setAttribute('aria-expanded', 'false');
                    otherQ.nextElementSibling.classList.remove('active');
                });
                if (!isOpen) {
                    q.setAttribute('aria-expanded', 'true');
                    a.classList.add('active');
                }
            });
        }
    });
}

function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

function highlightCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active', 'text-secondary');
            if (link.classList.contains('dropdown-item')) {
                const parentBtn = link.closest('.dropdown').querySelector('button');
                parentBtn.classList.add('active', 'text-secondary');
            }
        }
    });
}

function initConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    if (!modal) return;
    const closeBtns = [
        document.getElementById('close-confirmation-modal'),
        document.getElementById('cancel-confirmation-modal')
    ];
    closeBtns.forEach(btn => btn?.addEventListener('click', () => modal.close()));
}

function showConfirmation(title, message, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    if (!modal) {
        if (confirm(message)) onConfirm();
        return;
    }
    const titleEl = document.getElementById('confirmation-modal-title');
    const msgEl = document.getElementById('confirmation-modal-message');
    const confirmBtn = document.getElementById('confirm-confirmation-modal');

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;

    if (confirmBtn) {
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        newConfirmBtn.addEventListener('click', () => {
            onConfirm();
            modal.close();
        });
    }

    modal.showModal();
}

function initContrastToggle() {
    const btn = document.getElementById('contrast-toggle');
    const modal = document.getElementById('contrast-modal');
    if (!btn || !modal) return;

    btn.addEventListener('click', () => modal.showModal());
    document.getElementById('close-contrast-modal').addEventListener('click', () => modal.close());

    const options = document.querySelectorAll('.contrast-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('border-secondary', 'bg-slate-50', 'ring-4', 'ring-secondary/20'));
            opt.classList.add('border-secondary', 'bg-slate-50', 'ring-4', 'ring-secondary/20');
            localStorage.setItem('temp-mode', opt.getAttribute('data-mode'));
        });
    });

    const sizes = document.querySelectorAll('.text-size-option');
    sizes.forEach(opt => {
        opt.addEventListener('click', () => {
            sizes.forEach(o => o.classList.remove('border-secondary', 'bg-slate-50', 'ring-4', 'ring-secondary/20'));
            opt.classList.add('border-secondary', 'bg-slate-50', 'ring-4', 'ring-secondary/20');
            localStorage.setItem('temp-size', opt.getAttribute('data-size'));
        });
    });

    document.getElementById('save-accessibility').addEventListener('click', () => {
        const mode = localStorage.getItem('temp-mode');
        const size = localStorage.getItem('temp-size');
        if (mode) applyMode(mode);
        if (size) applySize(size);
        modal.close();
    });

    // Initial Apply
    applyMode(localStorage.getItem('accessibility-mode') || 'standard');
    applySize(localStorage.getItem('accessibility-size') || 'ts-medium');
}

function applyMode(mode) {
    const html = document.documentElement;
    html.className = html.className.replace(/\bcm-\S+/g, '').trim();
    if (mode !== 'standard') html.classList.add(`cm-${mode}`);
    localStorage.setItem('accessibility-mode', mode);
}

function applySize(size) {
    const html = document.documentElement;
    html.classList.remove('ts-small', 'ts-medium', 'ts-large', 'ts-xlarge');
    html.classList.add(size);
    localStorage.setItem('accessibility-size', size);
}

function initCookieConsent() {
    if (localStorage.getItem('cookie-consent')) return;
    const banner = document.createElement('div');
    banner.className = 'fixed bottom-8 left-8 right-8 md:left-auto md:w-[450px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-8 z-[5000] rounded-[2rem] border border-slate-100 animate-in slide-in-from-bottom-10 duration-700';
    banner.innerHTML = `
        <div class="relative">
            <h2 class="text-2xl font-black text-primary mb-4 uppercase tracking-tight">Privacy Policy</h2>
            <p class="text-slate-500 text-sm leading-relaxed mb-8 font-medium">We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
            <div class="flex gap-4">
                <button id="cookie-accept" class="flex-1 py-4 bg-primary text-white font-black rounded-full hover:bg-secondary transition-all text-xs uppercase tracking-widest">Accept</button>
                <button id="cookie-decline" class="flex-1 py-4 bg-slate-100 text-primary font-black rounded-full hover:bg-slate-200 transition-all text-xs uppercase tracking-widest">Decline</button>
            </div>
        </div>
    `;
    document.body.appendChild(banner);
    document.getElementById('cookie-accept').onclick = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        banner.remove();
    };
    document.getElementById('cookie-decline').onclick = () => {
        localStorage.setItem('cookie-consent', 'declined');
        banner.remove();
    };
}
