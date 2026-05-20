// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لرسالتك! سنتواصل معك قريباً.');
        this.reset();
    });
}

// Book button functionality
const bookButtons = document.querySelectorAll('.book-button');
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم تحويلك إلى صفحة الحجز قريباً');
    });
});

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Gallery image interaction
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        // You can add a modal or lightbox functionality here
        console.log('Image clicked:', this.alt);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to tour cards
document.querySelectorAll('.tour-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

console.log('Timeless Pyramids Tours - Website Loaded Successfully!');
