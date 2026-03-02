$(document).ready(function () {
    // Initialize slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    // Mobile menu elements
    const hamburger = document.querySelector('.hamberger');
    const closeBtn = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav ul li a');

    // Open menu
    hamburger?.addEventListener('click', () => {
        mobileNav?.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    });

    // Close menu
    closeBtn?.addEventListener('click', () => {
        mobileNav?.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // Close menu on nav link click (UX boost)
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav?.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Auto-reset nav on desktop resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            mobileNav?.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});
