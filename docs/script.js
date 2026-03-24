// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        
        // Close all items
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(q => q.setAttribute('aria-expanded', 'false'));
        
        // Open clicked item if it was closed
        if (!isOpen) {
            item.classList.add('open');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .faq-item, .coming-soon-card').forEach(el => {
    observer.observe(el);
});

// Track Download Button Clicks (Analytics) - Only with consent
document.querySelectorAll('a[href*="apps.apple.com"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('App Store link clicked');
        
        if (typeof getCookie === 'function') {
            const analyticsConsent = getCookie('mindful_body_analytics');
            if (analyticsConsent === 'true' && typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Download',
                    'event_label': 'App Store Button',
                    'value': 1
                });
            }
        }
    });
});

// Track GitHub Link Clicks - Only with consent
document.querySelectorAll('a[href*="github.com"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('GitHub link clicked');
        
        if (typeof getCookie === 'function') {
            const analyticsConsent = getCookie('mindful_body_analytics');
            if (analyticsConsent === 'true' && typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Engagement',
                    'event_label': 'GitHub Link',
                    'value': 1
                });
            }
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect and mobile menu
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        padding: 24px;
        gap: 16px;
        box-shadow: 0 8px 32px rgba(34, 197, 94, 0.16);
        border-bottom: 1px solid var(--color-border);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
`;
document.head.appendChild(rippleStyle);

// Performance: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add scroll progress indicator
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 72px;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        z-index: 999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(indicator);
    
    const updateIndicator = debounce(() => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
    
    window.addEventListener('scroll', updateIndicator);
};

createScrollIndicator();

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = 'noopener noreferrer';
});

// Console Easter Egg
console.log(
    '%c💪 Mindful Body',
    'font-size: 24px; font-weight: bold; color: #22c55e;'
);
console.log(
    '%cLooking for something? Check out our GitHub: https://github.com/aloth/mindful-body',
    'font-size: 14px; color: #4b7563;'
);
console.log(
    '%cWant to report an issue? https://github.com/aloth/mindful-body/issues',
    'font-size: 14px; color: #4b7563;'
);

// Page load performance tracking - Only with consent
window.addEventListener('load', () => {
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    if (typeof getCookie === 'function') {
        const analyticsConsent = getCookie('mindful_body_analytics');
        if (analyticsConsent === 'true' && typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'page_load',
                'value': loadTime,
                'event_category': 'Performance'
            });
        }
    }
});

// Add smooth reveal animation to hero elements
window.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-graphic');
    
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
    
    // Check cookie consent on page load
    checkCookieConsent();
});

/* ===================================
   COOKIE CONSENT MANAGEMENT (GDPR/TTDSG)
   =================================== */

// Cookie names
const COOKIE_CONSENT_NAME = 'mindful_body_consent';
const COOKIE_ANALYTICS_NAME = 'mindful_body_analytics';
const COOKIE_EXPIRY_DAYS = 365;

// Check if user has already given consent
function checkCookieConsent() {
    const consent = getCookie(COOKIE_CONSENT_NAME);
    
    if (!consent) {
        showCookieBanner();
    } else {
        const analyticsConsent = getCookie(COOKIE_ANALYTICS_NAME);
        if (analyticsConsent === 'true') {
            initializeAnalytics();
        }
    }
}

function showCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function closeCookieBanner() {
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (consent) {
        hideCookieBanner();
    } else {
        alert('Bitte treffen Sie eine Auswahl. / Please make a selection.');
    }
}

function acceptAllCookies() {
    setCookie(COOKIE_CONSENT_NAME, 'true', COOKIE_EXPIRY_DAYS);
    setCookie(COOKIE_ANALYTICS_NAME, 'true', COOKIE_EXPIRY_DAYS);
    initializeAnalytics();
    hideCookieBanner();
    console.log('✅ All cookies accepted');
}

function acceptNecessaryOnly() {
    setCookie(COOKIE_CONSENT_NAME, 'true', COOKIE_EXPIRY_DAYS);
    setCookie(COOKIE_ANALYTICS_NAME, 'false', COOKIE_EXPIRY_DAYS);
    console.log('✅ Only necessary cookies accepted');
    hideCookieBanner();
}

function initializeAnalytics() {
    if (typeof gtag !== 'undefined') {
        console.log('📊 Analytics initialized with user consent');
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    } else {
        console.log('ℹ️ Analytics consent granted but gtag not loaded');
    }
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

function trackEvent(eventName, eventParams) {
    const analyticsConsent = getCookie(COOKIE_ANALYTICS_NAME);
    
    if (analyticsConsent === 'true' && typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    } else {
        console.log(`🚫 Event "${eventName}" not tracked (no consent)`);
    }
}
