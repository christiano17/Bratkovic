// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer - Slide in from left animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should slide in
document.addEventListener('DOMContentLoaded', () => {
    // Section headers
    document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
    
    // Service cards
    document.querySelectorAll('.service-card').forEach(el => observer.observe(el));
    
    // Story paragraphs
    document.querySelectorAll('.story-content p').forEach(el => observer.observe(el));
    
    // Contact items
    document.querySelectorAll('.contact-item').forEach(el => observer.observe(el));
});
